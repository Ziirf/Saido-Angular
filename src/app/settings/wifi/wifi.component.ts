import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent{

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  okBtn() : void {
    this.closeWindowEvent.emit(null);
  }

  cancelBtn() : void {
    this.closeWindowEvent.emit(null);
  }
}
