import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input("min")
  public minValue : number;

  @Input("max")
  public maxValue : number;

  @Input("value")
  public selectedValue: number;

  @Output() 
  valueChangedEvent = new EventEmitter<number>();
  
  valueChanged(input: number) {
    this.selectedValue = input;
    this.valueChangedEvent.emit(this.selectedValue);
  }
}
