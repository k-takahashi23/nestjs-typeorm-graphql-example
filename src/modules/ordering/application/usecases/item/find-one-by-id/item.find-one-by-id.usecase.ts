import { ItemFindOneByIdRequest } from './item.find-one-by-id.request';
import { ItemFindOneByIdResponse } from './item.find-one-by-id.response';

import { Usecase } from '@/seedwork';

export type ItemFindOneByIdUsecase = Usecase<
  ItemFindOneByIdRequest,
  ItemFindOneByIdResponse
>;
