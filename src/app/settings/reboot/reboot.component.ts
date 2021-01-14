import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-reboot',
  templateUrl: './reboot.component.html',
  styleUrls: ['./reboot.component.scss']
})
export class RebootComponent {

  data: DataService;

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  constructor(
    private httpService: HttpService,
    public _data: DataService
  ) { 
    this.data = _data;
  }

  // Sends a http request that tells the ESP to reboot.
  yesBtn(): void {
    this.httpService.postSettingRequst(1000, `todo:reboot`);
    this.closeWindowEvent.emit(null);
  }

  // Closes the pop up.
  noBtn() : void {
    this.closeWindowEvent.emit(null);
  }
}
