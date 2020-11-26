import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent{

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  okBtn(){
    this.closeWindowEvent.emit(null);
  }

  cancelBtn(){
    this.closeWindowEvent.emit(null);
  }
}
