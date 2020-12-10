import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-led-count',
  templateUrl: './led-count.component.html',
  styleUrls: ['./led-count.component.scss']
})
export class LedCountComponent{

  data: DataService;
  ledCount: string;

  @Output()
  closeWindowEvent = new EventEmitter<string>();


  constructor(
    private httpService: HttpService,
    private _data: DataService
  ) { 
    this.data = _data;
  }

  okBtn(): void{
    this.httpService.postSettingRequst(1000, null);
    this.closeWindowEvent.emit(null);
  }

  cancelBtn() : void{
    this.closeWindowEvent.emit(null);
  }

  checkForNumber()  : boolean {
    let value : number = parseInt(this.ledCount);
    return isNaN(parseInt(this.ledCount)) || value < 0;
  }
}
