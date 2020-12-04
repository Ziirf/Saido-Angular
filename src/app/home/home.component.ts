import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import iro from '@jaames/iro';
import { HttpService } from '../services/http-service.service';
import { HexService } from '../services/hex.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Variables of this class.
  colorPicker : iro.ColorPicker;
  //colors: Array<iro.Color>;

  constructor(
    private ngZone: NgZone, 
    private httpService: HttpService,
    private hexConvert: HexService,
    private data: DataService
    ) { }
  
  ngOnInit(): void {
    // Instanciates the Colorwheel.
    this.colorPicker = iro.ColorPicker("#colorWheel", {
      color: new iro.Color({h:0, s:0, v:100}),
      layout:  [
        {
          component: iro.ui.Wheel,
          options: {
            borderColor: "#E3E3E3",
            borderWidth: 1
          }
        }
      ]
    });

    /*
    this.data.colorPalette = [
      new iro.Color({r: 100, g: 100, b: 100}),
      new iro.Color({r: 100, g: 100, b: 100})
    ];*/
    
    // Instanciates the color array.
    //this.colors = new Array<iro.Color>();
    //this.data.colorPalette = new Array<iro.Color>();

    // Add an event listener.
    this.colorPicker.on('color:change', (color) => this.ngZone.run(() => this.onColorChange(color)));
  }

  // Remove the eventlistener on destruction.
  ngOnDestroy(): void{
    this.colorPicker.off('color:change', (color) => this.ngZone.run(() => this.onColorChange(color)));
  }

  // OnColorChange event.
  onColorChange(color) {
    let hue = Math.round((color.hsv.h / 360) * 255);         // Hue value converted from 1-255 from 1-360.
    let sat = Math.round((color.hsv.s / 100) * 255);         // Saturation value converted from 1-255 from 1-100.
    let val = Math.round((color.hsv.v / 100) * 255);         // Value converted from 1-255 from 1-100.
    this.httpService.postRequest(1, this.hexConvert.intToHex(hue, sat, val));
  }

  colorChange(value: number){
    this.colorPicker.color.value = value;
  }
}

/*  Notes:
    The values which the LED accepts are base on 255bit input, while the iro
    module is working with the normal HSV values (hue being from a 0-360 range,
    satuation and value both being from a 0-100 range). This means that the color
    which we get from the iro.Color needs to be converted before sending it to the
    ESP32, as the more calculations that can be done on the client before sending it
    to the ESP32 the better.    */


// TODO: Optimize timer to limit post requests.