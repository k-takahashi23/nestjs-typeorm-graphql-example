import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class ItemsArgs {
  @Field((_) => Int)
  @Min(0)
  skip = 0;

  @Field((_) => Int)
  @Min(1)
  @Max(50)
  take = 25;
}
