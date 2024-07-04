import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';


//TYPE ALIASES CONCEPT
//type User = {
  //id: string;
   // avatar:string;
    //name:string;
//}
//const randomIndex = Math.floor(Math.random()  *DUMMY_USERS.length)

// INTERFACE CONCEPT 

interface User{
  id: string;
  avatar:string;
  name:string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //@Input({required :true}) id!: string;
  //@Input({required :true}) avatar!: string;
  //@Input({required :true}) name!: string;
  @Input({required: true}) user!:User;

  @Output() select = new EventEmitter();
  //select = output<string>();  //it is new use of output function 

  imagePath(){
    return 'assets/users/' + this.user;

  };

   onSelectUser(){
        this.select.emit(this.user.id);
   }
    }  

    
     
