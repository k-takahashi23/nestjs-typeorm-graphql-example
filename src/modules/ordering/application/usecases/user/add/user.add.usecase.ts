import { UserAddRequest } from './user.add.request';
import { UserAddResponse } from './user.add.response';

import { Usecase } from '@/seedwork';

export type UserAddUsecase = Usecase<UserAddRequest, UserAddResponse>;
