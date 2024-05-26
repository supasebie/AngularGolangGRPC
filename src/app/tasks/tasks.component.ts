import { Component, Signal, effect, inject, input, signal } from '@angular/core';
import { Task } from '../_shared/models/task';
import { User } from '../_shared/models/user';
import { TaskService } from '../_shared/services/task.service';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  selectedUser = input<User>();
  userTasks = input<Task[]>();

  constructor() {
  }
}
