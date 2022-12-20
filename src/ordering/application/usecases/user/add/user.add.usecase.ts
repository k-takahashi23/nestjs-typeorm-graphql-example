import { Usecase } from '@/seedwork';
import { UserAddRequest } from './user.add.request';
import { UserAddResponse } from './user.add.response';

export type UserAddUsecase = Usecase<UserAddRequest, UserAddResponse>;
