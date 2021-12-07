import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(){
  }


  ngOninit(){
  }

  clear(){
    localStorage.clear()
  }

  add(task : Task){
    localStorage.setItem("task", JSON.stringify(task))
  }

  getTask(){
    return JSON.parse(localStorage.getItem('task') ||'');
  }


 

  
}
