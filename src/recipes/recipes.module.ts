import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesRepository } from './recipes.repository';

@Module({
  providers: [RecipesResolver, RecipesRepository, DateScalar],
})
export class RecipesModule {}