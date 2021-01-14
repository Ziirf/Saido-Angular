import { Component, Output, EventEmitter } from '@angular/core';
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

  // Sends a http request with the new wifi configs.
  okBtn(): void {
    this.httpService.postSettingRequst(1000, `todo:wifi`)
    this.closeWindowEvent.emit(null);
  }

  // Closes pop up.
  cancelBtn() : void {
    this.closeWindowEvent.emit(null);
  }
}
