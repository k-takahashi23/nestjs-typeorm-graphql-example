import { ItemChangeNameRequest } from './item.change-name.request';
import { ItemChangeNameResponse } from './item.change-name.response';

import { Usecase } from '@/seedwork';

export type ItemChangeNameUsecase = Usecase<
  ItemChangeNameRequest,
  ItemChangeNameResponse
>;
