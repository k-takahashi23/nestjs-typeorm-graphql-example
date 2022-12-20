import { Usecase } from 'src/seedwork/usecase';
import { ItemChangeNameRequest } from './item.change-name.request';
import { ItemChangeNameResponse } from './item.change-name.response';

export type ItemChangeNameUsecase = Usecase<
  ItemChangeNameRequest,
  ItemChangeNameResponse
>;
