import { Component, OnInit, OnDestroy, Output, NgZone, EventEmitter, Input} from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-colorwheel',
  templateUrl: './colorwheel.component.html',
  styleUrls: ['./colorwheel.component.scss']
})
export class ColorwheelComponent implements OnInit, OnDestroy {

  @Input()
  color: iro.Color = new iro.Color({ h: 0, s: 0, v: 100 });

  @Output()
  colorChangeEvent: EventEmitter<iro.Color> = new EventEmitter;

  colorwheel : iro.ColorPicker;

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    // Instanciates the Colorwheel.
    this.colorwheel = iro.ColorPicker("#colorWheel", {
      color: this.color,
      layout:  [
        {
          component: iro.ui.Wheel,
          options: {
            wheelLightness: false
          }
        }
      ]
    });

    // Sends out the initial color.
    this.colorChangeEvent.emit(this.colorwheel.color);

    // Add an event listener.
    this.colorwheel.on('color:change', (color) => this.ngZone.run(() => this.onColorChange(color)));
  }

  // Remove the eventlistener on destruction.
  ngOnDestroy(): void{
    this.colorwheel.off('color:change', (color) => this.ngZone.run(() => this.onColorChange(color)));
  }

  onColorChange(color: iro.Color) : void {
    this.colorChangeEvent.emit(color);
  }
}
