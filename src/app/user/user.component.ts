import { Component, Input, computed, input, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random()  *DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required :true}) avatar!: string;
  @Input({required :true}) name!: string;
  //avatar = input.required<string>();
  //name = input.required<string>();


  imagePath = computed(() => {
    return 'assets/users/' + this.avatar;

  });
  //get imagePath(){
   // return 'assets/users/' + this.avatar;
  //}
   onSelectUser(){}

    }  

    
     // const randomIndex = Math.floor(Math.random()  *DUMMY_USERS.length)
      //this.selectedUser.set(DUMMY_USERS[randomIndex])
     
