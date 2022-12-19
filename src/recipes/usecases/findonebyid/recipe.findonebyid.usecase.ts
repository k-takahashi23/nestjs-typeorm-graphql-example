import { Injectable, NotFoundException } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { Recipe } from '../../domain/models/recipe.model';
import { RecipesRepository } from '../../infrastructure/recipes.repository';

@Injectable()
export class RecipeFindOneByIdUsecase {
  constructor(private readonly recipesRepository: RecipesRepository) {}
  
  async handle(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }
}