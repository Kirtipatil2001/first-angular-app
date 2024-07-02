import { Component, EventEmitter, Input, Output, computed, input, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random()  *DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required :true}) id!: string;
  @Input({required :true}) avatar!: string;
  @Input({required :true}) name!: string;
  @Output() select = new EventEmitter();
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar;

  });
  //get imagePath(){
   // return 'assets/users/' + this.avatar;
  //}
   onSelectUser(){
        this.select.emit(this.id);
   }
    }  

    
     // const randomIndex = Math.floor(Math.random()  *DUMMY_USERS.length)
      //this.selectedUser.set(DUMMY_USERS[randomIndex])
     
