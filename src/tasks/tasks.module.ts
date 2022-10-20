import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { tasksProviders } from './tasks.provider';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [DatabaseModule],
  providers: [TasksResolver, TasksService, ...tasksProviders]
})
export class TasksModule {}
