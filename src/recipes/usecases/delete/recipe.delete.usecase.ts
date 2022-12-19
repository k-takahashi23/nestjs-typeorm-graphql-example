import { Inject, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesRepositoryInteface } from 'src/recipes/domain/models/recipes.repository.interface';
import { RecipesRepository } from '../../infrastructure/recipes.repository';

@Injectable()
export class RecipeDeleteUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInteface
  ) {}
  
  async handle(@Args('id') id: string) {
    return await this.recipesRepository.remove(id);
  }
}