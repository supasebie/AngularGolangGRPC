import { Injectable } from '@angular/core';
import { mock_tasks } from '../data/mock-tasks';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  
  private tasks: Task[] = mock_tasks;


  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(userId: number)
  {
    return this.tasks.find(task => task.userId === userId);
  }

  getTasksByUserId(userId: number): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

}
