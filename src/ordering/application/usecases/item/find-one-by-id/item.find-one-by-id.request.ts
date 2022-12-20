import { Request } from '@/seedwork';

export class ItemFindOneByIdRequest implements Request {
  public constructor(id: string) {
    this.id = id;
  }

  public id: string;
}
