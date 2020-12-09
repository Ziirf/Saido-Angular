import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {

  @Input("bgColor")
  bgColor: string = "orange";

  @Input("color")
  color: string = "white";

  @Output("value")
  onSliderChange: EventEmitter<boolean> = new EventEmitter;

  value: boolean = false;

  constructor() { 
    this.onSliderChange.emit(this.value);
  }

  sliderChange() {
    this.value = !this.value;
    this.onSliderChange.emit(this.value);
  }
}