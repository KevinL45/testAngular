import { Component } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    /**
     * Au chargement de l'application,
     * je récupère mes tâches dans le localStorage.
     * @type {Task[]}
     */
    this.tasks = this.taskService.tasks;
  }

  /**
   * Cette fonction se déclenche dans
   * l'application lorsqu'une nouvelle
   * tâche est créée par l'utilisateur
   * dans le composant app-add-task.
   * @param newTaskEvent
   */
  newTask(newTaskEvent: any) {
    /**
     * On ajoute la nouvelle tâche dans le tableau de tâches. 
     * Puis on auvegarde dans le localStorage.
     */
    this.tasks.push(newTaskEvent.task);
    this.taskService.tasks = this.tasks;
  }

  /**
   * L'utilisateur viens de terminer une tâche.
   * @param {Task} task
   */
  isDone(task: Task) {
    task.status = true;
    this.taskService.tasks = this.tasks;
  }

  /**
   * L'utilisateur viens de supprimer une tâche. On la retire du tableau et on sauvegarde le tout
   * @param task
   */
  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index >= 0) this.tasks.splice(index, 1);

    this.taskService.tasks = this.tasks;
  }

  /**
   * Permet de compter les tâches non terminée.
   */
  getCountTask() {
    return this.tasks.filter(t => !t.status).length;
  }
}
