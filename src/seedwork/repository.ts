export interface Repository<Entity> {
  // TODO
  findAll(args: any): Promise<Entity[]>;
  findOneById(id: string): Promise<Entity>;
  save(entity: Entity): Promise<void>;
  remove(entity: Entity): Promise<void>;
}
