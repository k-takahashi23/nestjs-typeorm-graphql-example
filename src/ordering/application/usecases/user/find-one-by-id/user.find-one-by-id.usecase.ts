import { Usecase } from 'src/seedwork/usecase';
import { UserFindOneByIdRequest } from './user.find-one-by-id.request';
import { UserFindOneByIdResponse } from './user.find-one-by-id.response';

export type UserFindOneByIdUsecase = Usecase<
  UserFindOneByIdRequest,
  UserFindOneByIdResponse
>;
