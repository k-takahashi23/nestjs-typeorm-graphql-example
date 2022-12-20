import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './api/resolvers/recipes.resolver';
import { RecipesRepository } from './infrastructure/repositories/recipes.repository';
import { RecipeAddUsecase } from './application/usecases/recipe/add/recipe.add.usecase';
import { RecipeDeleteUsecase } from './application/usecases/delete/recipe.delete.usecase';
import { RecipeFindAllUsecase } from './application/usecases/findall/recipe.findall.usecase';
import { RecipeFindOneByIdInteractor } from './application/usecases/findonebyid/recipe.findonebyid.interactor';

@Module({
  providers: [
    RecipesResolver,
    RecipeAddUsecase,
    {
      provide: 'RecipeFindOneByIdUsecase',
      useClass: RecipeFindOneByIdInteractor,
    },
    RecipeFindAllUsecase,
    RecipeDeleteUsecase,
    {
      provide: 'RecipesRepository',
      useClass: RecipesRepository,
    },
    DateScalar
  ],
})
export class RecipesModule {}