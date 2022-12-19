import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Recipe {

  constructor(id: string) {
    this.id=id;
    this.title=id;
    this.description=id;
    this.creationDate=new Date();
    this.ingredients=[]
  }

  @Field(type => ID)
  id: string;

  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}