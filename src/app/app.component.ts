import { Component } from '@angular/core';
import { User } from './models/user';
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
     * je récupère mes utilisateurs dans le localStorage.
     * @type {User[]}
     */
     this.users = this.userService.users;
  }

  /**
   * Cette fonction se déclenche dans
   * l'application lorsqu'un utilisateur
   * est créer dans le composant app-add-user.
   * @param newUserEvent
   */
  newUser(newUserEvent: any) {

    this.users.push(newUserEvent.user);
    this.userService.users = this.users;
  }
}
