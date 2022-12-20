import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { Recipe } from 'src/recipes/domain/aggregates/recipe/recipe.entity';
import { RecipesRepositoryInterface } from 'src/recipes/domain/aggregates/recipe/recipes.repository.interface';
import { RecipeFindOneByIdUsecase } from './recipe-findonebyid.usecase';

@Injectable()
export class RecipeFindOneByIdInteractor implements RecipeFindOneByIdUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface
  ) {}
  
  async handle(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }
}