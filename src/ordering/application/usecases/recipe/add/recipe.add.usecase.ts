import { Usecase } from 'src/seedwork/usecase';
import { RecipeAddRequest } from './recipe.add.request';
import { RecipeAddResponse } from './recipe.add.response';

export type RecipeAddUsecase = Usecase<
  RecipeAddRequest,
  RecipeAddResponse
>;
