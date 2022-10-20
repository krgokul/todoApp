import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field(() => String, { description: 'Name of the task' })
  title: string;
  @Field(() => Boolean, { description: 'status of the task' })
  completed: boolean = false;
}