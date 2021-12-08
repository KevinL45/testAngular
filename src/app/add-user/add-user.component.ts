import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userService : UserService, private fb: FormBuilder) { 
    
  }

  userForm  = this.fb.group({
    pseudo: ['',Validators.required],
    email: ['',Validators.required],
    nom: ['',Validators.required],
  });

  ngOnInit(): void {

  }

  onSubmit(){
    //console.warn(this.userForm.value)
  }

  saveUser(){
    this.userForm.setValue({
      pseudo : this.userForm.get('pseudo')?.value,
      email : this.userForm.get('email')?.value,
      nom : this.userForm.get('nom')?.value
    })
    console.log(this.userForm.value)

  }



}
