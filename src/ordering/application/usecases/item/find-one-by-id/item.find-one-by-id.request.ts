import { Request } from 'src/seedwork/application/request';

export class ItemFindOneByIdRequest implements Request {
  public constructor(id: string) {
    this.id = id;
  }

  public id: string;
}
