import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {

  data: DataService;

  @Input("bgColor")
  bgColor: string = "orange";

  @Input("color")
  color: string = "white";

  @Output("toggle")
  onSliderChange: EventEmitter<boolean> = new EventEmitter;

  toggle: boolean = false;

  constructor(_data: DataService) {
    this.data = _data;
    this.onSliderChange.emit(this.toggle);
  }

  // Changes the toggle state, and returns the state of the toggle over an event emitter.
  sliderChange() : void {
    this.toggle = !this.toggle;
    this.onSliderChange.emit(this.toggle);
  }
}