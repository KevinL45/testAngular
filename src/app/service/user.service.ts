import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  set users(u: User[]) {
    localStorage.setItem('user', JSON.stringify(u));
  }

  get users(): User[] {
    return JSON.parse(localStorage.getItem('user') || '');
  }

}
