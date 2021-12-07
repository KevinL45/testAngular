import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(task: Task[], status:boolean): Task[] {
    return task.filter(t=>t.status == status);
  }



}
