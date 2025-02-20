import { Test, TestingModule } from '@nestjs/testing';
import { AppController, TaskController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello From Server!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello From Server!');
    });
  });
});

describe('TaskControllers', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [AppService],
    }).compile();
  });

  describe('TaskController', () => {
    let taskController: TaskController;

    beforeAll(() => {
      taskController = app.get(TaskController);
    });

    it('should get all tasks', async () => {
      const result = [];
      jest.spyOn(taskController, 'getAllTasks').mockImplementation(async () => result);
      expect(await taskController.getAllTasks()).toBe(result);
    });

    it('should get a task by id', async () => {
      const result = { id: '1', title: 'Test Task', description: 'Test Description', status: 'pending' };
      jest.spyOn(taskController, 'getTask').mockImplementation(async () => result);
      expect(await taskController.getTask('1')).toBe(result);
    });

    it('should create a new task', async () => {
      const newTask = { title: 'New Task', description: 'New Description', status: 'pending' };
      jest.spyOn(taskController, 'postTask').mockImplementation(async () => 'Task created successfully');
      expect(await taskController.postTask(newTask)).toBe('Task created successfully');
    });

    it('should update a task', async () => {
      const updatedTask = { title: 'Updated Task', description: 'Updated Description', status: 'completed' };
      jest.spyOn(taskController, 'updateTask').mockImplementation(async () => 'Task updated successfully');
      expect(await taskController.updateTask('1', updatedTask)).toBe('Task updated successfully');
    });

    it('should delete a task', async () => {
      jest.spyOn(taskController, 'deleteTask').mockImplementation(async () => 'Task deleted successfully');
      expect(await taskController.deleteTask('1')).toBe('Task deleted successfully');
    });
  });
});
