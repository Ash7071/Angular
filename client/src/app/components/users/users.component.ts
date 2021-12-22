import { Component, OnInit } from '@angular/core';
import{UsersService} from 'src/app/service/users.service';
import{Users}from './users.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users: Users[] = [];
  constructor(
    private _UsersService: UsersService
  ) { }

  ngOnInit(): void {
  }
  fetchUsers(){
       this.users = this._UsersService.fetchedUsers();
  }
}
