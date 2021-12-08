import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  /**
   * Permet d'émettre un évènement lors
   * de la création d'un user.
   * @type {EventEmitter<any>}
   */
   @Output() newUserEvent = new EventEmitter();

   /**
    * L'utilisateur à créer.
    * @type {User}
    */
   user: User = new User();


  constructor(private userService : UserService, private fb: FormBuilder) { 
    
  }

  userForm  = this.fb.group({
    pseudo: ['',Validators.required],
    email: ['',Validators.required],
    nom: ['',Validators.required],
  });

  ngOnInit(): void {

  }

  addUser(){
    //console.warn(this.userForm.value)
    /*this.userForm.setValue({
      pseudo : this.userForm.get('pseudo')?.value,
      email : this.userForm.get('email')?.value,
      nom : this.userForm.get('nom')?.value
    })
    console.log(this.userForm.value)
    this.userService.save(this.userForm.value)
    */
    this.newUserEvent.emit({ user: this.user });
    this.user = new User();



  }



}
