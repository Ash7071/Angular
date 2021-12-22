import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from '../components/users/users.model';
// u need to inform root file///
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private listOfUsers : Users[] = [];

  constructor(
    private _httpClient: HttpClient
  ) {
    this.getUsers();
  }
   /// http client //
  getUsers(){
    const URL = 'http://localhost:3000/users';
           this._httpClient.get<Users[]>(URL)
             .subscribe((data: Users[])=>{
                  debugger;
                  this.listOfUsers = data;
             });
  }
  addUser(){

  }
  fetchedUsers(){
    return this.listOfUsers;
  }
}
