import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class NewItemInput {
  @Field()
  @Length(2, 20)
  name: string;
}
