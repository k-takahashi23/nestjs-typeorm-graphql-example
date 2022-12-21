import { Request } from '@/seedwork';

export class UserAddRequest implements Request {
  public constructor(name: string) {
    this.name = name;
  }

  public name: string;
}
