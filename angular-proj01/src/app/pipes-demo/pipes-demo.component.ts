import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  str:string;
  num : number;
  today:Date;

  emp:Employee;
   constructor() { 

    this.str = "this is pipe"
    this.num = Math.PI;
    this.today = new Date();
    this.emp = {empId:101,name:"lakshmi"}
  }

}

class Employee{
  empId:number;
  name:string;
    
}