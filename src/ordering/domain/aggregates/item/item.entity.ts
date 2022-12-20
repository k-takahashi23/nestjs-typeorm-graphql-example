import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity as TypeOrmEntity, PrimaryColumn } from "typeorm";
import { AggregateRoot } from 'src/seedwork/aggregate-root';
import { v4 as uuidv4 } from "uuid";

@ObjectType({ description: 'item' })
@TypeOrmEntity({ name: 'items' })
export class Item implements AggregateRoot {
  public constructor(id: string, name: string){
    this.id=id;
    this.name=name;
  }

  public static new(name: string): Item {
    const id = uuidv4()
    return new Item(id, name);
  }

  @Field((_type) => ID)
  @PrimaryColumn()
  public id: string;

  @Field()
  @Column()
  public name: string;

  public changeName(newName: string) {
    this.name = newName;
  }
}
