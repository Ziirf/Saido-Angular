import { Component, Output, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent{
  
  data: DataService;
  ssid: string;
  password: string;
  
  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  constructor(
    private httpService: HttpService,
    public _data: DataService
  ) { 
    this.data = _data;
  }

  okBtn(): void {
    console.log(this.ssid + ' ' + this.password)
    this.httpService.postSettingRequst(1000, null)
    this.closeWindowEvent.emit(null);
  }

  cancelBtn() : void {
    this.closeWindowEvent.emit(null);
  }
}
