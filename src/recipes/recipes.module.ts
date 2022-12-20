import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './api/resolvers/recipes.resolver';
import { RecipesRepository } from './infrastructure/repositories/recipes.repository';
import { RecipeAddUsecase } from './application/usecases/recipe/add/recipe.add.usecase';
import { RecipeFindOneByIdInteractor } from './application/interactors/recipe/recipe.find-one-by-id.interactor';
import { RecipeDeleteUsecase } from './application/usecases/recipe/delete/recipe.delete.usecase';
import { RecipeFindAllUsecase } from './application/usecases/recipe/find-all/recipe.find-all.usecase';

@Module({
  providers: [
    // api
    RecipesResolver,
    // application
    RecipeAddUsecase,
    {
      provide: 'RecipeFindOneByIdUsecase',
      useClass: RecipeFindOneByIdInteractor,
    },
    RecipeFindAllUsecase,
    RecipeDeleteUsecase,
    // infrastructure
    {
      provide: 'RecipesRepository',
      useClass: RecipesRepository,
    },
    // common
    DateScalar,
  ],
})
export class RecipesModule {}
