import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity as TypeOrmEntity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { AggregateRoot } from '@/seedwork';

@ObjectType({ description: 'user' })
@TypeOrmEntity({ name: 'users' })
export class User implements AggregateRoot {
  public constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public static new(name: string): User {
    const id = uuidv4();
    return new User(id, name);
  }

  @Field(() => ID)
  @PrimaryColumn()
  public id: string;

  @Field()
  @Column()
  public name: string;

  public changeName(newName: string) {
    this.name = newName;
  }
}
