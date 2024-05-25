import { Component, inject, model, signal } from '@angular/core';
import { HeaderComponent } from './header/header-component';
import { UserComponent } from './user/user.component';
import { UserService } from './_shared/services/user.service';
import { User } from './_shared/models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  #userService = inject(UserService);
  users = model(this.#userService.getAll())
  selectedUser: User | null = null;

  handleUserSelected(user: User){
    this.selectedUser = user;
    console.log(this.selectedUser)
  }

}
