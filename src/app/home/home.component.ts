import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import { HexService } from 'src/app/services/hex.service';
import { DataService } from 'src/app/services/data.service';
import iro from '@jaames/iro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  
  data: DataService;

  constructor(
    private httpService: HttpService,
    private hexService: HexService,
    _data: DataService
  ) { 
    this.data = _data;
  }
  
  // Fires whenever the color is changed in the colorwheel.
  colorChange(color: iro.Color) {
    // Sets the brightness of the selected color and saves the color in memory.
    color.value = this.data.brightness;
    this.data.color = color;

    let hue = Math.round((color.hsv.h / 360) * 255);         // Hue value converted from 1-255 from 1-360.
    let sat = Math.round((color.hsv.s / 100) * 255);         // Saturation value converted from 1-255 from 1-100.
    let val = Math.round((color.hsv.v / 100) * 255);         // Value converted from 1-255 from 1-100.
    
    // Sends a http request to the esp32 to change the LED lights.
    this.httpService.postRequest(1, this.hexService.intToHex(hue, sat), this.hexService.intToHex(val));
  }

  // Fires when a color is selected from the color palette, changes the hue and saturation of the color -
  // but keeps its brightness. (will also fire colorChange since the color changed in the wheel)
  colorSelected(color: iro.Color){
    this.data.color.hue = color.hue;
    this.data.color.saturation = color.saturation;
  }

  // Fires when the brightness slider is changed, it changes the brightness of the color -
  // but keeps its hue and saturation. (will also fire colorChange since the color changed in the wheel)
  brightnessChange(brightness: number) {
    this.data.brightness = brightness;
  }
}

/*  
    Notes:
    The values which the LED accepts are base on 255bit input, while the iro
    module is working with the normal HSV values (hue being from a 0-360 range,
    satuation and value both being from a 0-100 range). This means that the color
    which we get from the iro.Color needs to be converted before sending it to the
    ESP32, as the more calculations that can be done on the client before sending it
    to the ESP32 the better.    
*/