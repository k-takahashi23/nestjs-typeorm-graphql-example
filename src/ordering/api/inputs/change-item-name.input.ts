import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class ChangeItemNameInput {
  @Field()
  @Length(36)
  id: string;

  @Field()
  @Length(2, 20)
  newName: string;
}
