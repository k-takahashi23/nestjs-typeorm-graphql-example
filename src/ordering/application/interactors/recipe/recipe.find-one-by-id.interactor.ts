import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { Recipe } from 'src/ordering/domain/aggregates/recipe/recipe.entity';
import { RecipesRepositoryInterface } from 'src/ordering/domain/aggregates/recipe/recipes.repository.interface';
import { RecipeFindOneByIdRequest } from '../../usecases/recipe/find-one-by-id/recipe.find-one-by-id.request';
import { RecipeFindOneByIdResponse } from '../../usecases/recipe/find-one-by-id/recipe.find-one-by-id.response';
import { RecipeFindOneByIdUsecase } from '../../usecases/recipe/find-one-by-id/recipe.find-one-by-id.usecase';

@Injectable()
export class RecipeFindOneByIdInteractor implements RecipeFindOneByIdUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface,

    // TMP
    @Inject('ItemsRepository')
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  async handle(
    request: RecipeFindOneByIdRequest,
  ): Promise<RecipeFindOneByIdResponse> {
    const { id } = request;

    // TODO
    const recipe = await this.itemsRepository.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }

    return new RecipeFindOneByIdResponse(new Recipe('aaa'));
  }
}
