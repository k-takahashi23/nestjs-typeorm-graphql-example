export interface Repository<Entity> {
  findAll(): Promise<Entity[]>;
  findOneById(id: string): Promise<Entity>;
  save(entity: Entity): Promise<void>;
  remove(entity: Entity): Promise<void>;
}
