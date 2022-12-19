import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesArgs } from 'src/recipes/api/dto/recipes.args';
import { Recipe } from '../../domain/models/recipe.model';
import { RecipesRepository } from '../../infrastructure/recipes.repository';

@Injectable()
export class RecipeFindAllUsecase {
  constructor(private readonly recipesRepository: RecipesRepository) {}
  
  async handle(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesRepository.findAll(recipesArgs);
  }
}