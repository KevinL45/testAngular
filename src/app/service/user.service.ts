import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  save(user : any[]){
    localStorage.setItem('user',JSON.stringify(user))
  }
}
