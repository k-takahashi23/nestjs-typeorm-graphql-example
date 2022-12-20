import { Request } from 'src/seedwork/application/request';

export class UserAddRequest implements Request {
  public constructor(name: string) {
    this.name = name;
  }

  public name: string;
}
