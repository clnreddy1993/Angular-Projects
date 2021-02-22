import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-struc-directive-demo',
  templateUrl: './struc-directive-demo.component.html',
  styleUrls: ['./struc-directive-demo.component.css']
})
export class StrucDirectiveDemoComponent {

  emp:Employee;
  desgs:string[][];
  constructor() {
   this.emp = new Employee();
  //  this.emp ={
  //   empId:0,


  //  };
   
   this.desgs=[
      ["MGR","Manager"],
      ["TL","Team Leader"],
      ["ASS","Associate"],
      ["TRN","Trainee"]
    ];
   }

  

}
