import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  set tasks(t: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(t));
  }

  get tasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '');
  }

  constructor() { }
}
