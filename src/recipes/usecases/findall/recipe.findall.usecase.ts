import { Inject, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesArgs } from 'src/recipes/api/dto/recipes.args';
import { RecipesRepositoryInterface } from 'src/recipes/domain/models/recipes.repository.interface';
import { Recipe } from '../../domain/models/recipe.model';
import { RecipesRepository } from '../../infrastructure/recipes.repository';

@Injectable()
export class RecipeFindAllUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface
  ) {}
  
  async handle(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesRepository.findAll(recipesArgs);
  }
}