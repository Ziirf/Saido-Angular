import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-palette',
  templateUrl: './edit-palette.component.html',
  styleUrls: ['./edit-palette.component.scss']
})
export class EditPaletteComponent {

  @Output() 
  closeWindowEvent = new EventEmitter<string>();
  selectedColor;

  constructor(
    private data: DataService
  ) { }

  //TODO
  selectedColorChange(event: Event){
    this.selectedColor = event;
    console.log(event);
  }

  //TODO
  changePosition(pos: number) {
    let list = this.data.colorPalette;
    [list[0], list[3]] = [list[3], list[0]];
  }

  okBtn() {
    this.closeWindowEvent.emit(null);
  }

}
