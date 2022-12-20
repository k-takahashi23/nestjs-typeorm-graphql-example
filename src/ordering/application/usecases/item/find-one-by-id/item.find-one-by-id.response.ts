import { Item } from 'src/ordering/domain/aggregates/item/item.entity';
import { Response } from 'src/seedwork/response';

export class ItemFindOneByIdResponse implements Response {
  public constructor(item: Item) {
    this.item = item;
  }

  public item: Item;
}
