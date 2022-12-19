import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './api/recipes.resolver';
import { RecipesRepository } from './infrastructure/recipes.repository';
import { RecipeAddUsecase } from './usecases/add/recipe.add.usecase';
import { RecipeDeleteUsecase } from './usecases/delete/recipe.findall.usecase';
import { RecipeFindAllUsecase } from './usecases/findall/recipe.findall.usecase';
import { RecipeFindOneByIdUsecase } from './usecases/findonebyid/recipe.findonebyid.usecase';

@Module({
  providers: [
    RecipesResolver,
    RecipesRepository,
    RecipeAddUsecase,
    RecipeFindOneByIdUsecase,
    RecipeFindAllUsecase,
    RecipeDeleteUsecase,
    DateScalar
  ],
})
export class RecipesModule {}