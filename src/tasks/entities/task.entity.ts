import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
export class Task {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Field()
  title: string;
  @Field({defaultValue : false} )
  completed: boolean;
}
