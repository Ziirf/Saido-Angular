import { Component, Input, Output, EventEmitter } from '@angular/core';
import iro from '@jaames/iro';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  data: DataService;
  // The lowest value of the slider
  @Input("min")
  public minValue : number = 0;

  // The highest value of the slider
  @Input("max")
  public maxValue : number = 100;

  // The initial value of the slider-point
  @Input("value")
  public selectedValue: number = this.maxValue/2;

  // The Color for the gradient
  @Input("color")
  public color: iro.Color;

  // Output for when the selected value change
  @Output()
  valueChangedEvent: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(_data: DataService) {
    this.data = _data;
  }
  
  // input have to be converted from string to a number in order to work.
  valueChanged(input: string) : void {
    this.selectedValue = parseInt(input);
    this.valueChangedEvent.emit(this.selectedValue);
  }

  // Changes the style of the background to a gradient
  setStyle() : object {
    var tempColor = new iro.Color(this.color);
    tempColor.value = 100;
    var style ={'background': this.color != null ? `linear-gradient(90deg, rgba(0,0,0,1) 0%, ${tempColor.rgbString} 100%)` : ''}
    return style;
  }
}