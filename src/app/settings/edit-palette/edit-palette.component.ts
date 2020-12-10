import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-palette',
  templateUrl: './edit-palette.component.html',
  styleUrls: ['./edit-palette.component.scss']
})
export class EditPaletteComponent {

  data: DataService;
  selectedColorIndex: number;

  @Output() 
  closeWindowEvent = new EventEmitter<null>();

  constructor(public _data: DataService) { 
    this.data = _data;
  }

  // Changes the selected color and selected color index when clicked on a color from the palette.
  selectedColorChange(event: any) : void {
    this.selectedColorIndex = event.index;
  }

  // Changes the position of colors to a position, the parameter is plus.
  changePosition(pos: number) : void {
    let list = this.data.colorPalette;
    [list[this.selectedColorIndex], list[this.selectedColorIndex + pos]] = [list[this.selectedColorIndex + pos], list[this.selectedColorIndex]];
    this.selectedColorIndex += pos;
  }

  // Closes the window.
  okBtn() : void {
    this.closeWindowEvent.emit();
  }

  // Remove the selected element from the list.
  deleteBtn() : void {
    this.data.colorPalette.splice(this.selectedColorIndex, 1);
    this.selectedColorIndex = null;
  }
}
