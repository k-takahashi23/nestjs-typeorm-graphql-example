import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RecipesRepositoryInterface } from 'src/ordering/domain/aggregates/recipe/recipes.repository.interface';
import { RecipeFindOneByIdRequest } from '../../usecases/recipe/find-one-by-id/recipe.find-one-by-id.request';
import { RecipeFindOneByIdResponse } from '../../usecases/recipe/find-one-by-id/recipe.find-one-by-id.response';
import { RecipeFindOneByIdUsecase } from '../../usecases/recipe/find-one-by-id/recipe.find-one-by-id.usecase';

@Injectable()
export class RecipeFindOneByIdInteractor implements RecipeFindOneByIdUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface,
  ) {}

  async handle(
    request: RecipeFindOneByIdRequest,
  ): Promise<RecipeFindOneByIdResponse> {
    const { id } = request;

    const recipe = await this.recipesRepository.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }

    return new RecipeFindOneByIdResponse(recipe);
  }
}
