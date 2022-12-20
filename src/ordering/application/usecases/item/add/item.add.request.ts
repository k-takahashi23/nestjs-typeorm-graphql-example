import { Request } from 'src/seedwork/request';

export class ItemAddRequest implements Request {
  public constructor(name: string) {
    this.name = name;
  }

  public name: string;
}
