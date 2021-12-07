import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  /**
   * Permet d'émettre un évènement lors
   * de la création d'une tâche.
   * @type {EventEmitter<any>}
   */
  @Output() newTaskEvent = new EventEmitter();

  /**
   * La tâche à créer.
   * @type {Task}
   */
  task: Task = new Task();
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    /**
     * Lorque l'utilisateur soumet le formulaire
     * j'émet l'évènement avec la nouvelle tâche.
     */
    this.newTaskEvent.emit({ task: this.task });

    /** Réinitialisation de la tâche @type {Task} */
    this.task = new Task();
  }

}
