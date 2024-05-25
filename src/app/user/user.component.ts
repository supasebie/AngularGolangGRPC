import { Component, InputSignal, computed, input, model, output, signal } from '@angular/core';
import { User } from '../_shared/models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = model<User>();
  onUserSelect = output<User>();

  selectUser(user: User): void {
      this.onUserSelect.emit(user);
  }
  
  imgSrc = computed(() =>
    "../assets/users/" + this.user()?.imageSrc
  )

  updateUser():void {
  }
}

