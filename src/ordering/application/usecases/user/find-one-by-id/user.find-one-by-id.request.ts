import { Request } from 'src/seedwork/application/request';

export class UserFindOneByIdRequest implements Request {
  public constructor(id: string) {
    this.id = id;
  }

  public id: string;
}
