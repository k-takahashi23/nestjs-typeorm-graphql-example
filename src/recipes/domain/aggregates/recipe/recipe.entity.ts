import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AggregateRoot } from 'src/seedwork/aggregate-root';

@ObjectType({ description: 'recipe' })
export class Recipe implements AggregateRoot {

  // TODO: 整理
  constructor(id: string) {
    this.id=id;
    this.title=id;
    this.description=id;
    this.creationDate=new Date();
    this.ingredients=[]
  }

  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}