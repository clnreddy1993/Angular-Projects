import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verbal'
})
export class VerbalPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits = ["ZERO", "ONE", "THREE", "DOT"];
  }

  transform(value: number): string {

    let input:string = `${value}`;
    let result:string = " ";

    for (let i = 0; i < input. length; i++) { 
      if (input.charAt(i) == '.'){
        result += `${this.digits[10]} `;
      } else { 
        result += `${this.digits[parseInt(input.charAt(i))]} `;
      }
    }

    return result;
  }

}
