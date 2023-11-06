import { Component } from '@angular/core';

@Component({
  selector: 'app-appp',
  templateUrl: './appp.component.html',
  styleUrls: ['./appp.component.css']
})
export class ApppComponent {
  firstName:string;

  constructor(){
    this.firstName="Akash";
  }
sayHello()
  {
    alert("hello"+this.firstName);
  }


}
