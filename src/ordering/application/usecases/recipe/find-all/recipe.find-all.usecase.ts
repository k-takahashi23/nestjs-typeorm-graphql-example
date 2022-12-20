import { Inject, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesArgs } from 'src/ordering/api/args/recipes.args';
import { Recipe } from 'src/ordering/domain/aggregates/recipe/recipe.entity';
import { RecipesRepositoryInterface } from 'src/ordering/domain/aggregates/recipe/recipes.repository.interface';

@Injectable()
export class RecipeFindAllUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface,
  ) {}

  async handle(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesRepository.findAll(recipesArgs);
  }
}
