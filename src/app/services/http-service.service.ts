import { Injectable } from '@angular/core';
import { RequestModel } from 'src/models/request.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService{

  // Default value of a white bright light.
  public lastRequest: RequestModel = {id: 1, request: "0000", brightness: "FF"}
  public isOnline: boolean = false;
  
  constructor() { }

  // Sends a post on fire
  togglePower() : void {
    let request = new XMLHttpRequest();
    
    // If it is online it will post the last request that was sent, if it is offline it will send a 0 (tells the ESP to turn off)
    if (this.isOnline == false){
      request.open('POST', `?${this.lastRequest.id}=${this.lastRequest.request + this.lastRequest.brightness}` );
      request.send();
      this.isOnline = true;
    }
    else{
      request.open('POST',`?0`);
      request.send();
      this.isOnline = false;
    }
  }

  // Sends a post request to the ESP32 if it is online.
  postRequest(id: number, command: string, brightness: string) : void {
    // Save the latest request in memory.
    this.lastRequest = { id: id, request: command, brightness: brightness };
    
    if (this.isOnline) {
      // Sends the last request to the ESP32 via http.
      let request = new XMLHttpRequest();
      request.open('POST', `?${this.lastRequest.id}=${this.lastRequest.request + this.lastRequest.brightness}`);
      request.send();
    }
  }

  // Not finished
  postSettingRequst(id: number, data: string) {
    let request = new XMLHttpRequest();
    request.open('POST', `?${id}=${data}`);
    request.send();
  }

}
