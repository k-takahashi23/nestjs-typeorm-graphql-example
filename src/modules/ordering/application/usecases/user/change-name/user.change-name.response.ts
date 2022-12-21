import { User } from '@/modules/ordering/domain';
import { Response } from '@/seedwork';

export class UserChangeNameResponse implements Response {
  public constructor(user: User) {
    this.user = user;
  }

  public user: User;
}
