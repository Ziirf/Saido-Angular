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

  brightBtn(): void{
    this._data.style = this._data.styles[0];
    this.closeWindowEvent.emit(null);
  }

  darkBtn() : void{
    this._data.style = this._data.styles[1];
    this.closeWindowEvent.emit(null);
  }

  partyBtn() : void{
    this._data.style = this._data.styles[2];
    this.closeWindowEvent.emit(null);
  }

  terminalBtn() : void{
    this._data.style = this._data.styles[3];
    this.closeWindowEvent.emit(null);
  }
}
