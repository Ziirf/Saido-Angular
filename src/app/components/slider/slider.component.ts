import { Component, Input, Output, EventEmitter } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input("min")
  public minValue : number = 0;

  @Input("max")
  public maxValue : number = 100;

  @Input("value")
  public selectedValue: number = this.maxValue/2;

  @Input("color")
  public color: iro.Color;

  @Output()
  valueChangedEvent : EventEmitter<number> = new EventEmitter<number>();
  
  // input have to be converted from string to a number in order to work.
  valueChanged(input: string) {
    this.selectedValue = parseInt(input);
    this.valueChangedEvent.emit(this.selectedValue);
  }

  setStyle(){
    var tempColor = new iro.Color(this.color);
    tempColor.value = 100;
    var style ={'background': this.color != null ? `linear-gradient(90deg, rgba(0,0,0,1) 0%, ${tempColor.rgbString} 100%)` : ''}
    return style;
  }
}