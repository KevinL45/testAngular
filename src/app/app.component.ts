import { Task } from './models/Task';
import { TestserviceService } from './service/testservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  header = 'TodoList !';
  title = ''
  tasks:Task[]=[];

  constructor(private service:TestserviceService){
  }
  ngOninit(){
    this.tasks = this.service.getTask();
  }

  addTask(task: Task){
    this.tasks.push(task)
    this.service.add(task)
  }

  clearTask(){
    localStorage.clear()
  }


 
}
