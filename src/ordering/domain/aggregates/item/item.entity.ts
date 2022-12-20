import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity as TypeOrmEntity, PrimaryColumn } from "typeorm";
import { AggregateRoot } from 'src/seedwork/aggregate-root';

@ObjectType({ description: 'item' })
@TypeOrmEntity({ name: 'items' })
export class Item implements AggregateRoot {
  public constructor(id: string, name: string){
    this.id=id;
    this.name=name;
  }

  @Field((_type) => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;
}
