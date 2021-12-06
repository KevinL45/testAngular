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
  list :any[]=[];

  constructor(private service:TestserviceService){
  }
  ngOninit(){

  }

  addTask(task : string){
    this.list.push({id:this.list.length,task})
    this.service.add(this.list)
  }

  clearTask(){
    localStorage.clear()
  }

  listTask(){
    return this.service.list()
  }


 
}
