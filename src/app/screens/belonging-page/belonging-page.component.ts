import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-belonging-page',
  templateUrl: './belonging-page.component.html',
  styleUrl: './belonging-page.component.css'
})
export class BelongingPageComponent {
  BelongingArray : any[] = [];

  belongingname : string = "";
  currentID =  "";

  constructor(private http:HttpClient){
    this.getAllBelongings();
  }

  save(){
    let bodyData = {
      "name" : this.belongingname
    };
    this.http.post("http://127.0.0.1:8000/api/v1/belongings/", bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Belonging Successfully Added");
      this.getAllBelongings();
    })
    this.belongingname = "";
  }

  getAllBelongings(){
    this.http.get("http://127.0.0.1:8000/api/v1/belongings/").subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.BelongingArray = resultData;
    });
  }
}
