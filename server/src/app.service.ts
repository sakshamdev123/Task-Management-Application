import { Injectable } from '@nestjs/common';
import Tasks from './task.model';

interface Task {
  title: string;
  description: string;
  status: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello From Server!';
  }

  async getAllTasks(): Promise<any> {
    try {
      return await Tasks.find();
    } catch (error) {
      console.error('Error: ', error);
      return [];
    }
  }

  async getTask(id: string): Promise<any> {
    try {
      return await Tasks.find({ _id: id });
    } catch (error) {
      console.error('Error: ', error);
      return [];
    }
  }

  async postTask(task: Task): Promise<string> {
    try {
      const newTask = new Tasks(task);
      await newTask.save();
      return 'Task Created Successfully.';
    } catch (error) {
      console.error('Error: ', error);
      return 'Task Creation Failed!';
    }
  }

  async updateTask(id: string, updatedTask: Task): Promise<string> {
    try {
      const res = await Tasks.findByIdAndUpdate(
        { _id: id },
        { $set: updatedTask },
      );
      if (!res) return "Can't Update User!";
      return 'Task Updated Successfully.';
    } catch (error) {
      console.error('Error: ', error);
      return "Can't Update Task!";
    }
  }

  async deleteTask(id: string): Promise<string> {
    try {
      const res = await Tasks.findByIdAndDelete({ _id: id });
      if (!res) return "Can't Delete Task!";
      return 'Task Deleted Successfully.';
    } catch (error) {
      console.error('Error: ', error);
      return "Can't Delete Task!";
    }
  }
}
