import { Usecase } from '@/seedwork';
import { ItemAddRequest } from './item.add.request';
import { ItemAddResponse } from './item.add.response';

export type ItemAddUsecase = Usecase<ItemAddRequest, ItemAddResponse>;
