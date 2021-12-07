import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm  = this.fb.group({
    pseudo: [''],
    email: [''],
    nom: [''],
    prenom: [''],

  });




  constructor(private userService : UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  saveUser(){

  }

}
