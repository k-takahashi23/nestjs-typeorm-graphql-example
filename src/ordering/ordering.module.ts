import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './api/resolvers/recipes.resolver';
import { RecipesRepository } from './infrastructure/repositories/recipes.repository';
import { RecipeFindOneByIdInteractor } from './application/interactors/recipe/recipe.find-one-by-id.interactor';
import { RecipeAddInteractor } from './application/interactors/recipe/recipe.add.interactor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './domain/aggregates/item/item.entity';
import { ItemsRepository } from './infrastructure/repositories/items.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item])
  ],
  providers: [
    // api
    RecipesResolver,
    // application
    {
      provide: 'RecipeAddUsecase',
      useClass: RecipeAddInteractor,
    },
    {
      provide: 'RecipeFindOneByIdUsecase',
      useClass: RecipeFindOneByIdInteractor,
    },
    // infrastructure
    {
      provide: 'RecipesRepository',
      useClass: RecipesRepository,
    },
    {
      provide: 'ItemsRepository',
      useClass: ItemsRepository,
    },
    // common
    DateScalar,
  ],
})
export class OrderingModule {}
