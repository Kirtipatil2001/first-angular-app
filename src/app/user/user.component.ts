import { Component, computed, input, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random()  *DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @input() avatar!: string;
@input()

      onSelectUser(){}

    }

    
     // const randomIndex = Math.floor(Math.random()  *DUMMY_USERS.length)
      //this.selectedUser.set(DUMMY_USERS[randomIndex])
     
