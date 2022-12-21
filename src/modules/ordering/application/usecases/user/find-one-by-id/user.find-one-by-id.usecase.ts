import { UserFindOneByIdRequest } from './user.find-one-by-id.request';
import { UserFindOneByIdResponse } from './user.find-one-by-id.response';

import { Usecase } from '@/seedwork';

export type UserFindOneByIdUsecase = Usecase<
  UserFindOneByIdRequest,
  UserFindOneByIdResponse
>;
