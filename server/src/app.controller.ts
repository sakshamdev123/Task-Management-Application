import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';

interface Task {
  title: string;
  description: string;
  status: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('api/tasks')
export class TaskController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTasks(): Promise<any> {
    return this.appService.getAllTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<any> {
    return this.appService.getTask(id);
  }

  @Post()
  postTask(@Body() task: Task): Promise<string> {
    return this.appService.postTask(task);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updatedTask: Task,
  ): Promise<string> {
    return this.appService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<string> {
    return this.appService.deleteTask(id);
  }
}
