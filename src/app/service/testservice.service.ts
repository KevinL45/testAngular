import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(){
  }


  ngOninit(){
  }

  clear(){
    localStorage.clear()
  }

  add(task : any){
    localStorage.setItem("nom", JSON.stringify(task))
  }

  remove(task : any){
    localStorage.removeItem(task)
  }

  list(){
    return localStorage.getItem('nom');
  }


 

  
}
