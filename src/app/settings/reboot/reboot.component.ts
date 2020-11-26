import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reboot',
  templateUrl: './reboot.component.html',
  styleUrls: ['./reboot.component.scss']
})
export class RebootComponent {

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  yesBtn(){
    this.closeWindowEvent.emit(null);
  }

  noBtn(){
    this.closeWindowEvent.emit(null);
  }
}
