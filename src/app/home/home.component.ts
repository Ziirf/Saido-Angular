import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public colorPicker : iro.ColorPicker;
  public colors : Array<iro.Color>;

  ngOnInit(): void {
    // Instanciates the Colorwheel.
    console.log("Du burde huske at låse din computer");
    this.colorPicker = iro.ColorPicker("#colorWheel", {
      borderWidth: 1,
      borderColor: "#E3E3E3",
      color: new iro.Color({h:0, s:0, v:100})
    });
    
    this.colors = new Array<iro.Color>();
    this.colors.push(new iro.Color({h: 0, s: 0, v:100}));

    // Event that fires after a color is changed in the Colorwheel.
    this.colorPicker.on(["color:change"], this.colorChanged);
  }

  colorChanged(color: iro.Color){
    var hue = Math.round((color.hsv.h / 360) * 255);         // Hue value converted from 1-255 from 1-360.
    var sat = Math.round((color.hsv.s / 100) * 255);         // Saturation value converted from 1-255 from 1-100.
    var val = Math.round((color.hsv.v / 100) * 255);         // Value converted from 1-255 from 1-100.

    // Sends the request to the ESP32 over URL
    var request = new XMLHttpRequest();
    request.open('Get',`?h=${hue}&s=${sat}&v=${val}`);
    request.send();
  }
  
  addColor() {
    this.colors.push(new iro.Color(this.colorPicker.color));
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