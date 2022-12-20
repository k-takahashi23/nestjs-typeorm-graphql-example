import { User } from 'src/ordering/domain/aggregates/user/user.entity';
import { Response } from 'src/seedwork/application/response';

export class UserChangeNameResponse implements Response {
  public constructor(user: User) {
    this.user = user;
  }

  public user: User;
}
