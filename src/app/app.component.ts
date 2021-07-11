import { Component } from '@angular/core';
import { IUser } from "./models/user"

// interface IUser {
//   name: string;
//   age: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUser!:IUser;
  users = [
    {
      name: 'Arun',
      age: 10
    },
    {
      name: 'Shankar',
      age: 20
    },
    {
      name: 'Anu',
      age: 15
    }
  ];

  onSelectedUser(user: IUser): void {
    this.selectedUser = user;
  }
}
