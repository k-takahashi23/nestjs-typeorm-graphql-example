import { Request } from '@/seedwork';

export class UserFindOneByIdRequest implements Request {
  public constructor(id: string) {
    this.id = id;
  }

  public id: string;
}
