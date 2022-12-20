import { Usecase } from 'src/seedwork/application/usecase';
import { UserChangeNameRequest } from './user.change-name.request';
import { UserChangeNameResponse } from './user.change-name.response';

export type UserChangeNameUsecase = Usecase<
  UserChangeNameRequest,
  UserChangeNameResponse
>;
