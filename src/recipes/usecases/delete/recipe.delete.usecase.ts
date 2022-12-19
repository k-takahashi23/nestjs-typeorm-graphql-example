import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesRepository } from '../../infrastructure/recipes.repository';

@Injectable()
export class RecipeDeleteUsecase {
  constructor(private readonly recipesRepository: RecipesRepository) {}
  
  async handle(@Args('id') id: string) {
    return await this.recipesRepository.remove(id);
  }
}