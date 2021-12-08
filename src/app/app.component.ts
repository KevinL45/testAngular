import { Component } from '@angular/core';
import { Task } from './models/task';
import { User } from './models/user';
import { TaskService } from './service/task.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    /**
     * Au chargement de l'application,
     * je récupère mes utilisateur dans le localStorage.
     * @type {User[]}
     */
     this.users = this.userService.users;
  }

  /**
   * Cette fonction se déclenche dans
   * l'application lorsqu'une nouvelle
   * tâche est créée par l'utilisateur
   * dans le composant app-add-task.
   * @param newUserEvent
   */
  newTask(newUserEvent: any) {
    /**
     * On ajoute la nouvelle tâche dans le tableau de tâches. 
     * Puis on auvegarde dans le localStorage.
     */
    this.users.push(newUserEvent.users);
    this.userService.users = this.users;
  }
}
