import { Item } from 'src/ordering/domain/aggregates/item/item.entity';
import { Response } from 'src/seedwork/application/response';

export class ItemChangeNameResponse implements Response {
  public constructor(item: Item) {
    this.item = item;
  }

  public item: Item;
}
