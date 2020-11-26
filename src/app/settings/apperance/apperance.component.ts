import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apperance',
  templateUrl: './apperance.component.html',
  styleUrls: ['./apperance.component.scss']
})
export class ApperanceComponent {

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  brightBtn(){
    this.closeWindowEvent.emit(null);
  }

  darkBtn(){
    this.closeWindowEvent.emit(null);
  }

  partyBtn(){
    this.closeWindowEvent.emit(null);
  }

  terminalBtn(){
    this.closeWindowEvent.emit(null);
  }

}
