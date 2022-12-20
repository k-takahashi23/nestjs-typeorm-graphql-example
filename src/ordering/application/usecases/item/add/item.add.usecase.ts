import { Usecase } from 'src/seedwork/usecase';
import { ItemAddRequest } from './item.add.request';
import { ItemAddResponse } from './item.add.response';

export type ItemAddUsecase = Usecase<ItemAddRequest, ItemAddResponse>;
