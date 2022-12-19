import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './api/recipes.resolver';
import { RecipesRepository } from './infrastructure/recipes.repository';
import { RecipeAddUsecase } from './usecases/add/recipe.add.usecase';
import { RecipeDeleteUsecase } from './usecases/delete/recipe.delete.usecase';
import { RecipeFindAllUsecase } from './usecases/findall/recipe.findall.usecase';
import { RecipeFindOneByIdInteractor } from './usecases/findonebyid/recipe.findonebyid.interactor';

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