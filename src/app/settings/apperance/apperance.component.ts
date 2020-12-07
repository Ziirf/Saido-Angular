import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apperance',
  templateUrl: './apperance.component.html',
  styleUrls: ['./apperance.component.scss']
})
export class ApperanceComponent {

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

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
