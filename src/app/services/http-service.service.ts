import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public latestRequest : string;
  public isOnline : boolean = false;

  togglePower() : void {
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

  postRequest(id: number, data: string) : void {
    let request = new XMLHttpRequest();
    this.latestRequest = `?${id}=${data}`;
    
    if(this.isOnline){
      request.open('POST', this.latestRequest || `?${id}=${data}`);
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
