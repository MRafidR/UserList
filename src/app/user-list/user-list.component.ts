import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  users:IUser[] =[]

  @Output()
  selectedUser : EventEmitter<IUser>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
    
  onBtnClick(user: IUser) {
    this.selectedUser.emit(user);
  }

}
