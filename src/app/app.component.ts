import { Component, ModelSignal, inject, model, signal } from '@angular/core';
import { HeaderComponent } from './header/header-component';
import { UserComponent } from './user/user.component';
import { UserService } from './_shared/services/user.service';
import { User } from './_shared/models/user';
import { TasksComponent } from './tasks/tasks.component';
import { Task } from './_shared/models/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  #userService = inject(UserService);
  users = signal<User[]>(this.#userService.getAllUsers())

  // User
  selectedUser = signal<User | undefined>(undefined);
  userTasks = signal<Task[] | undefined>(undefined);


  handleUserSelected(user: User){
    this.selectedUser = signal(user);
    this.userTasks = signal(this.#userService.getUserTasks(user.id));
  }

}