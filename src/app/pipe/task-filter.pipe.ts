import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
