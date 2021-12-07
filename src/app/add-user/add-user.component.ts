import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  profileForm = new FormGroup({
  pseudo: new FormControl(''),
  email: new FormControl(''),
  nom: new FormControl(''),
  prenom: new FormControl('')
  })





  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  saveUser(){

  }

}
