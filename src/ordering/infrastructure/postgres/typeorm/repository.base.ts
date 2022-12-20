import { Injectable } from '@nestjs/common';
import { Repository as TypeOrmRepository } from 'typeorm';
import { Repository } from '@/seedwork';

@Injectable()
export abstract class TypeOrmRepositoryBase<TEntity>
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
    // TODO: id を渡すためとりあえずas any
    return this._repository.findOneBy({ id } as any);
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
