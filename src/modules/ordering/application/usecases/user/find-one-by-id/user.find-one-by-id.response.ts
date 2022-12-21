import { AutoMap } from '@automapper/classes';

import { User } from '@/modules/ordering/domain';
import { Response } from '@/seedwork';

export class UserFindOneByIdResponse implements Response {
  public constructor(user: User) {
    this.user = user;
  }

  @AutoMap()
  public user: User;
}
