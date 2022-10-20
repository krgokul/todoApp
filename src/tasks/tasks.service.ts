import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { Model } from 'mongoose';


@Injectable()
export class TasksService { 
  constructor(
    @Inject('TASK_MODEL')
    private taskModel: Model<Task>,
  ) {}

  create(createTaskInput: CreateTaskInput) {
    const task = new this.taskModel(createTaskInput);
    return task.save();  
  }

  async findAll() : Promise<Task[]>{
    return this.taskModel.find().exec();;
  }

  async findOne(taskid: string) : Promise<Task>{
    return this.taskModel.findById(taskid);
  }

  async update(id: string, updateTaskInput: UpdateTaskInput) {
    const existingUser = await this.taskModel
      .findOneAndUpdate({ _id: id }, { $set: updateTaskInput }, { new: true })
      .exec();

    if (!existingUser) {
      throw new NotFoundException(`Task ${id} not found`);
    }
    return existingUser;
  }

  async remove(_id: string) {
    const task = await this.taskModel.findOne({_id});
    return task.remove();
  }
}
