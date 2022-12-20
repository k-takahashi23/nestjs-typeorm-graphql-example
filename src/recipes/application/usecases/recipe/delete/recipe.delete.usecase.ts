import { Inject, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesRepositoryInterface } from 'src/recipes/domain/aggregates/recipe/recipes.repository.interface';

@Injectable()
export class RecipeDeleteUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface
  ) {}
  
  async handle(@Args('id') id: string) {
    return await this.recipesRepository.remove(id);
  }
}