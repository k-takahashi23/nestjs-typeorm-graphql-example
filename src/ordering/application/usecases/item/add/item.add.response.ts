import { Item } from '@/ordering/domain';
import { Response } from '@/seedwork';

export class ItemAddResponse implements Response {
  public constructor(item: Item) {
    this.item = item;
  }

  public item: Item;
}
