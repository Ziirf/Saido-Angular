import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service.service';
import { HexService } from '../services/hex.service';
import { DataService } from '../services/data.service';
import iro from '@jaames/iro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // Variables of this class.
  colorPicker : iro.ColorPicker;
  color : iro.Color

  constructor(
    private httpService: HttpService,
    private hexConvert: HexService,
    public data: DataService
  ) { }
  
  ngOnInit(): void {

  }

  colorChange(color: iro.Color){
    this.color = color;
    let hue = Math.round((color.hsv.h / 360) * 255);         // Hue value converted from 1-255 from 1-360.
    let sat = Math.round((color.hsv.s / 100) * 255);         // Saturation value converted from 1-255 from 1-100.
    let val = Math.round((color.hsv.v / 100) * 255);         // Value converted from 1-255 from 1-100.
    
    this.httpService.postRequest(1, this.hexConvert.intToHex(hue, sat, val));
  }

  colorSelected(color: iro.Color){
    this.color.hue = color.hue;
    this.color.saturation = color.saturation;
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