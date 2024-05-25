import { Injectable } from '@angular/core';
import { mock_users } from '../data/mock-users'
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []

  constructor() { }

  getAll() {
    this.users = mock_users;
    return this.users;
  }
}
