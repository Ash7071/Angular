import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
      listOfUsers=[
        {name : 'John'},
        {name : 'Ash'},
        {name : 'Bob'},
        {name : 'Rob'}
      ]
      imageSource : string = "file:///Users/ashok/Desktop/undraw_Ride_a_bicycle_re_6tjy.png";
      inputType : string = "abc@gmail.com";
  constructor() { }

  ngOnInit(): void {
  }
  showPopup(event:any){
    //debugger
    alert("Hi, how are you?");
  }

}
