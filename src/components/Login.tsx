import React, { SyntheticEvent } from 'react';
import { AuthService } from '../services/AuthService';


interface LoginProps {
  authService: AuthService
}

interface LoginState {
  userName: string,
  password: string,
  loginAttenpted: boolean,
  loginSuccesfull: boolean
}

interface CustomEvent {
  target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState>{

  state: LoginState = {
    userName: '',
    password: '',
    loginAttenpted: false,
    loginSuccesfull: false
  }

  private setUserName(event: CustomEvent) {
    this.setState({userName: event.target.value})
  }

  private setPassword(event: CustomEvent) {
    this.setState({password: event.target.value})
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({loginAttenpted: true})
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    )
    if (result) {
      this.setState({loginSuccesfull: true})
    } else {
      this.setState({loginSuccesfull: false})
    }
  }

  render() {
    let loginMessage: any;

    if (this.state.loginAttenpted) {
      if (this.state.loginSuccesfull) {
        loginMessage = <label>Login successful</label>
      } else {
        loginMessage = <label>Login failed</label>
      }
    }

    return (
      <div>
        <h2>Please login</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input value={this.state.userName} type="text" placeholder='Username' onChange={e => this.setUserName(e)}/><br/>
          <input value={this.state.password} type="password" placeholder='Password' onChange={e => this.setPassword(e)}/><br/>
          <input type="submit" value="Login" />
        </form>
        {loginMessage}
      </div>
    )
  }
}