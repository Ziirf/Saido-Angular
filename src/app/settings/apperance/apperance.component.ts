import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-apperance',
  templateUrl: './apperance.component.html',
  styleUrls: ['./apperance.component.scss']
})
export class ApperanceComponent {

  data: DataService;

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  constructor(private _data: DataService) { 
    this.data = _data;
  }

  brightBtn() : void{
    this.closeWindowEvent.emit(null);
  }

  darkBtn() : void{
    this.closeWindowEvent.emit(null);
  }

  partyBtn() : void{
    this.closeWindowEvent.emit(null);
  }

  terminalBtn() : void{
    this.closeWindowEvent.emit(null);
  }

}
