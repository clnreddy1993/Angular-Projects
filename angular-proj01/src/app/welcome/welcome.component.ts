import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  message : string;
  logo:string
  logos : string[]; 
  imgWidth : number;
  
  constructor() {
    this.message = "this is the first component";
    this.logos=["src/assets/images/n1.jpg", "src/assets/images/n2.jpg"];
    this.logo= this.logos[0];
    this.imgWidth=150;
   }

   onImageDoubleClick(){
      if(this.logo === this.logos[0]){
        this.logo === this.logos[1];
      }else{
        this.logo === this.logos[0];
      }
   }

}
