import { Component, Input, Output, EventEmitter } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent{
  
  @Input()
  public colors: Array<iro.Color>;

  @Input()
  public colorWheel: iro.ColorPicker;

  @Input()
  public allowAddColor: boolean = false;

  @Output()
  onSelectedColor = new EventEmitter<iro.Color>();

  // Adds the selected color from the colorwheel to the colorArray.
  private addColor() {
    if(this.colorWheel){
      this.colors.push(new iro.Color(this.colorWheel.color));
    }
  }

  // Move the Colorwheel cursor to the saved color.
  private selectedColor(color: iro.Color){
    if(this.colorWheel){
      this.colorWheel.color.rgb = {r: color.rgb.r, g: color.rgb.g, b:color.rgb.b};
    }
    this.onSelectedColor.emit(color);
  }
}
