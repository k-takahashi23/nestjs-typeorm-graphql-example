import { ItemAddRequest } from './item.add.request';
import { ItemAddResponse } from './item.add.response';

import { Usecase } from '@/seedwork';

export type ItemAddUsecase = Usecase<ItemAddRequest, ItemAddResponse>;
