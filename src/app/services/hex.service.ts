import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HexService {

  constructor() { }

  // Converts numbers between 0 and 255 into a hex string.
  intToHex(... input: number[]) : string{
    let output = "";

    // Loops through the amount of parameters applied
    for (let i = 0; i < input.length; i++) {
      // Checks that the numbers is in range, else it will return null and give an error in console.
      if (input[i] <= 255 && input[i] >= 0) {
        //Converts the number to a hex string.
        output += input[i].toString(16).padStart(2, '0').toUpperCase();
      }
      else{
        console.log("Error: Covert to hex failed");
        return null;
      }
    }
  
    return output;
  }

  // Converts an array of numbers between 0 and 255 into a hex string.
  intArrayToHex(input: number[]) : string{
    let output = "";

    // Loops through the array.
    for (let i = 0; i < input.length; i++) {
      // Checks that the numbers is in range, else it will return null and give an error in console.
      if (input[i] <= 255 && input[i] >= 0) {
        //Converts the number to a hex string.
        output += input[i].toString(16).padStart(2, '0').toUpperCase();
      }
      else{
        console.log("Error: Covert to hex failed");
        return null;
      }
    }
    
    return output;
  }
}
