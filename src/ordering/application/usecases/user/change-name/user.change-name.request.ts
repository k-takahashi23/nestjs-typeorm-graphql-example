import { Request } from 'src/seedwork/application/request';

export class UserChangeNameRequest implements Request {
  public constructor(id: string, newName: string) {
    this.id = id;
    this.newName = newName;
  }

  public id: string;

  public newName: string;
}