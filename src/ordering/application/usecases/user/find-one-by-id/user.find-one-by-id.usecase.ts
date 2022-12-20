import { Usecase } from '@/seedwork';
import { UserFindOneByIdRequest } from './user.find-one-by-id.request';
import { UserFindOneByIdResponse } from './user.find-one-by-id.response';

export type UserFindOneByIdUsecase = Usecase<
  UserFindOneByIdRequest,
  UserFindOneByIdResponse
>;
