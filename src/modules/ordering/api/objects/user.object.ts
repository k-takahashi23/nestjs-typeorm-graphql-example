import { AutoMap } from '@automapper/classes';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  @AutoMap()
  public id: string;

  @Field()
  @AutoMap()
  public name: string;
}
