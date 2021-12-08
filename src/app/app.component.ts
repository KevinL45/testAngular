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

  //Liste des utilisateurs
  users: User[] = [];
  //Déclaration d'une variable
  unUser?:User;


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

  detail(user :User){
    console.log('app.components - detail()')
    this.unUser = user;
  }

  onKeyup(e : any){
    console.log(e.target.value)
  }

  onChangeEvent(event: any){
    this.userService.users = this.update(this.userService.users, this.unUser?.pseudo, event.target.value)
  }

  update = (arrObj:any, oldValue:any, newValue:any)  =>
      arrObj.map((elem:any) =>  (elem.pseudo === oldValue)
      ? ({ ...elem, pseudo: newValue })
      : elem
  );
}
