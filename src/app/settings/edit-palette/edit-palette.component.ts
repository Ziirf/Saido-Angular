import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-palette',
  templateUrl: './edit-palette.component.html',
  styleUrls: ['./edit-palette.component.scss']
})
export class EditPaletteComponent {

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  okBtn(){
    this.closeWindowEvent.emit(null);
  }

}
