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

  yesBtn(): void {
    this.httpService.postSettingRequst(1000, null);
    this.closeWindowEvent.emit(null);
  }

  noBtn() : void {
    this.closeWindowEvent.emit(null);
  }
}
