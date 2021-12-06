import { Component } from '@angular/core';
import { Task } from './interface/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header = 'TodoList !';
  task = ''

  constructor(){
  }
  ngOninit(){
  }

  addTask(task : string){
    console.log(task)

  }
}
