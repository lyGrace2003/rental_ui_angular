import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-page',
  templateUrl: './friend-page.component.html',
  styleUrl: './friend-page.component.css'
})
export class FriendPageComponent {
  FriendArray : any[] = [];

  friendname : string = "";
  currentID =  "";

  constructor(private http: HttpClient){
    this.getAllFriend();
  }

  save(){
    let bodyData = {
      "name" : this.friendname
    };
    this.http.post("http://127.0.0.1:8000/api/v1/friends/", bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Friend Successfully Added");
      this.getAllFriend();
    })
    this.friendname="";
  }

  getAllFriend(){
    this.http.get("http://127.0.0.1:8000/api/v1/friends/").subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.FriendArray = resultData;
    })
  }
}
