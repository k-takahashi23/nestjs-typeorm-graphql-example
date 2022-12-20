import { Usecase } from 'src/seedwork/usecase';
import { UserChangeNameRequest } from './user.change-name.request';
import { UserChangeNameResponse } from './user.change-name.response';

export type UserChangeNameUsecase = Usecase<
  UserChangeNameRequest,
  UserChangeNameResponse
>;
