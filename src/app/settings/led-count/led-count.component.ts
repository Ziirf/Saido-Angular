import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-led-count',
  templateUrl: './led-count.component.html',
  styleUrls: ['./led-count.component.scss']
})
export class LedCountComponent{

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  okBtn(){
    this.closeWindowEvent.emit(null);
  }

  cancelBtn(){
    this.closeWindowEvent.emit(null);
  }
}
