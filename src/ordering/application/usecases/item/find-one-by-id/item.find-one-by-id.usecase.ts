import { Usecase } from '@/seedwork';
import { ItemFindOneByIdRequest } from './item.find-one-by-id.request';
import { ItemFindOneByIdResponse } from './item.find-one-by-id.response';

export type ItemFindOneByIdUsecase = Usecase<
  ItemFindOneByIdRequest,
  ItemFindOneByIdResponse
>;
