import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HexService {

  constructor() { }

  intToHex(... input: number[]) : string{
    let output = "";

    for (let i = 0; i < input.length; i++) {
      if(input[i] <= 255){
        output += input[i].toString(16).padStart(2, '0').toUpperCase();
      }
      else{
        console.log("Error: Covert to hex Error");
        return null;
      }
    }
  
    return output;
  }

  intArrayToHex(input: number[]) : string{
    let output = "";

    for (let i = 0; i < input.length; i++) {
      if(input[i] <= 255){
        output += input[i].toString(16).padStart(2, '0').toUpperCase();
        //console.log(input);
      }
      else{
        console.log("Error: Covert to hex Error");
        return null;
      }
    }
    
    return output;
  }
}
