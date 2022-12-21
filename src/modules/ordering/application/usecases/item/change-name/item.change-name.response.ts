import { Item } from '@/modules/ordering/domain';
import { Response } from '@/seedwork';

export class ItemChangeNameResponse implements Response {
  public constructor(item: Item) {
    this.item = item;
  }

  public item: Item;
}
