import { Component, Input, Output, EventEmitter } from '@angular/core';
import iro from '@jaames/iro';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent{

  data: DataService;
  
  // Inputs the array of the colorpalette.
  @Input('colors')
  public colors: iro.Color[];

  // The inputColor that would be added
  @Input('color')
  public inputColor: iro.Color;

  @Input('highlight')
  public highlight: boolean = true;

  // The Index of the selected Color.
  @Input('selectedColorIndex')
  public selectedColorIndex: number;

  // Sends out an object of the selected Color and its index.
  @Output()
  public onSelectedColor = new EventEmitter<object>();

  constructor(
    private _data: DataService
  ) {
    this.data = _data;
  }

  // Adds the selected color from the colorwheel to the colorArray.
  private addColor() : void {
    if(this.inputColor){
      this.colors.push(new iro.Color({h: this.inputColor.hue, s: this.inputColor.saturation, v: 90}));
    }
  }

  // Move the Colorwheel cursor to the saved color.
  private selectedColor(color: iro.Color, index: number) : void {
    this.selectedColorIndex = index;

    this.onSelectedColor.emit({color: color, index: index});
  }
}
