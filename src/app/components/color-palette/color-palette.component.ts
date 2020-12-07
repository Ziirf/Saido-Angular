import { Component, Input, Output, EventEmitter } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent{
  
  // Inputs the array of the colorpalette.
  @Input()
  public colors: iro.Color[];

  // TODO: Remove.
  @Input()
  public colorWheel: iro.ColorPicker;

  // Boolean, enables the add color feature.
  @Input()
  public allowAddColor: boolean = false;

  // The Index of the selected Color.
  @Input()
  public selectedColorIndex: number;

  // Sends out an object of the selected Color and its index.
  @Output()
  public onSelectedColor = new EventEmitter<object>();

  // Adds the selected color from the colorwheel to the colorArray.
  private addColor() : void {
    if(this.colorWheel){
      let color = this.colorWheel.color;
      this.colors.push(new iro.Color({h: color.hue, s: color.saturation, v: 90}));
    }
  }

  // Move the Colorwheel cursor to the saved color.
  private selectedColor(color: iro.Color, index: number) : void {
    this.selectedColorIndex = index;

    if(this.colorWheel){
      this.colorWheel.color.rgb = {r: color.rgb.r, g: color.rgb.g, b:color.rgb.b};
    }

    this.onSelectedColor.emit({color: color, index: index});
  }
}
