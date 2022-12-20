import { Usecase } from 'src/seedwork/application/usecase';
import { ItemChangeNameRequest } from './item.change-name.request';
import { ItemChangeNameResponse } from './item.change-name.response';

export type ItemChangeNameUsecase = Usecase<
  ItemChangeNameRequest,
  ItemChangeNameResponse
>;
