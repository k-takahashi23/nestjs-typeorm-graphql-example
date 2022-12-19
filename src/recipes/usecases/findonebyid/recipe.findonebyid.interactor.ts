import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesRepositoryInteface } from 'src/recipes/domain/models/recipes.repository.interface';
import { Recipe } from '../../domain/models/recipe.model';
import { RecipeFindOneByIdUsecase } from './recipe.findonebyid.usecase';

@Injectable()
export class RecipeFindOneByIdInteractor implements RecipeFindOneByIdUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInteface
  ) {}
  
  async handle(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }
}