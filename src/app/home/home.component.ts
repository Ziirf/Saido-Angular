import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import iro from '@jaames/iro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Variables of this class.
  colorPicker : iro.ColorPicker;
  colors : Array<iro.Color>;

  ngOnInit(): void {
    // Instanciates the Colorwheel.
    this.colorPicker = iro.ColorPicker("#colorWheel", {
      borderWidth: 1,
      borderColor: "#E3E3E3",
      color: new iro.Color({h:0, s:0, v:100})
    });
    
    // Instanciates the color array.
    this.colors = new Array<iro.Color>();

    // Event that fires after a color is changed in the Colorwheel.
    this.colorPicker.on(["color:change"], function(color: iro.Color){
      let hue = Math.round((color.hsv.h / 360) * 255);         // Hue value converted from 1-255 from 1-360.
      let sat = Math.round((color.hsv.s / 100) * 255);         // Saturation value converted from 1-255 from 1-100.
      let val = Math.round((color.hsv.v / 100) * 255);         // Value converted from 1-255 from 1-100.
      AppComponent.latestRequest = `?1=${colorToHex(hue, sat, val)}`;
      
      // Sends the request to the ESP32 over URL
      if(AppComponent.powerStatus){
        let request = new XMLHttpRequest();
        
        request.open('POST', AppComponent.latestRequest);
        request.send();
      }
    });
  }
  
  // Adds the selected color from the colorwheel to the colorArray.
  addColor() {
    this.colors.push(new iro.Color(this.colorPicker.color));
  }

  // Move the Colorwheel cursor to the saved color.
  selectedColor(color: iro.Color){
    this.colorPicker.color.rgb = {r: color.rgb.r, g: color.rgb.g, b:color.rgb.b};
  }
}

function intToHex(input: number){
  if(input > 255){
    return null;
  }

  return input.toString(16).padStart(2, '0').toUpperCase();
}

function colorToHex(h: number, s: number, v: number){
  if(h > 255 || s > 255 || v > 255){
    return null;
  }

  return new String(h.toString(16).padStart(2, '0') + s.toString(16).padStart(2, '0') + v.toString(16).padStart(2, '0')).toUpperCase();
}

/*  Notes:
    The values which the LED accepts are base on 255bit input, while the iro
    module is working with the normal HSV values (hue being from a 0-360 range,
    satuation and value both being from a 0-100 range). This means that the color
    which we get from the iro.Color needs to be converted before sending it to the
    ESP32, as the more calculations that can be done on the client before sending it
    to the ESP32 the better.    */


// TODO: Optimize timer to limit post requests.