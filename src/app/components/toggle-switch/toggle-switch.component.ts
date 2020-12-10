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

  @Output("value")
  onSliderChange: EventEmitter<boolean> = new EventEmitter;

  value: boolean = false;

  constructor(private _data: DataService) {
    this.data = _data;
    this.onSliderChange.emit(this.value);
  }

  sliderChange() {
    this.value = !this.value;
    this.onSliderChange.emit(this.value);
  }
}