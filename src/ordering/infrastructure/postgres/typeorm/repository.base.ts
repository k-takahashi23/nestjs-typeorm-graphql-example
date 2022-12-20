import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository as TypeOrmRepository } from 'typeorm';

import { Entity, Repository } from '@/seedwork';

@Injectable()
export abstract class TypeOrmRepositoryBase<TEntity extends Entity>
  implements Repository<TEntity>
{
  private readonly _repository: TypeOrmRepository<TEntity>;

  public constructor(repository: TypeOrmRepository<TEntity>) {
    this._repository = repository;
  }

  public async findAll(): Promise<TEntity[]> {
    return this._repository.find();
  }

  public async findOneById(id: string): Promise<TEntity> {
    return this._repository.findOneBy({ id } as FindOptionsWhere<TEntity>);
  }

  public async save(entity: TEntity): Promise<void> {
    this._repository.save(entity);
    return;
  }

  public async remove(entity: TEntity): Promise<void> {
    this._repository.remove(entity);
    return;
  }
}
