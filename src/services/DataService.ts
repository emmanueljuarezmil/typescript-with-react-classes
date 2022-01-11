import { Space } from "../model/Model";

export class DataService {

  public async getSpaces(): Promise <Space[]> {
    const result: Space[] = []
    result.push({
      location: 'Paris',
      name: 'Best location',
      spaceId: '123'
    })
    result.push({
      location: 'Paris',
      name: 'Best location',
      spaceId: '124'
    })
    result.push({
      location: 'Paris',
      name: 'Best location',
      spaceId: '125'
    })
    return result;
  }
}