import { Request } from 'src/seedwork/request';

export class RecipeFindOneByIdRequest implements Request {
  public constructor(id: string) {
    this.id = id;
  }

  public id: string;
}
