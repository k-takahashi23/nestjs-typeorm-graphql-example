export interface Repository<Entity> {
  // TODO
  findAll(args: any): Promise<Entity[]>;
  findOneById(id: string): Promise<Entity>;
  save(entity: any): Promise<any>;
  remove(id: string): Promise<any>;
}
