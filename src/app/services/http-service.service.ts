import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public latestRequest : string;
  public isOnline : boolean = false;

  togglePower(){
    let request = new XMLHttpRequest();
    
    if (this.isOnline == false){
      request.open('POST', this.latestRequest || "?1=0000FF" );
      request.send();
      this.isOnline = true;
    }
    else{
      request.open('POST',`?0`);
      request.send();
      this.isOnline = false;
    }
  }

  postRequest(id: number, data: string){
    let request = new XMLHttpRequest();
    this.latestRequest = `?${id}=${data}`;
    
    if(this.isOnline){
      request.open('POST', this.latestRequest);
      request.send();
    }
  }

}