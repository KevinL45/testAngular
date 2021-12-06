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
    console.log(this.list)
  }

  deleteTask(i : number){
    this.list.splice(i)
    console.log(this.list)
  }
}
