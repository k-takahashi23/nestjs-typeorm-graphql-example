import { UserChangeNameRequest } from './user.change-name.request';
import { UserChangeNameResponse } from './user.change-name.response';

import { Usecase } from '@/seedwork';

export type UserChangeNameUsecase = Usecase<
  UserChangeNameRequest,
  UserChangeNameResponse
>;
