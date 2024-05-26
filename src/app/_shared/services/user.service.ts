import { Injectable, inject } from '@angular/core';
import { mock_users } from '../data/mock-users'
import { User } from '../models/user';
import { TaskService } from './task.service';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []
  #taskService = inject(TaskService);

  constructor() { }

  getAllUsers() {
    this.users = mock_users;
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  getUserTasks(id: number) {
    return this.#taskService.getTasksByUserId(id);
  }
}
