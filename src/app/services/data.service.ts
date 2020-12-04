import { Injectable, OnInit } from '@angular/core';
import iro from '@jaames/iro';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  ngOnInit(): void {
    
  }

  constructor() { 
    this.colorPalette = [
      new iro.Color({r: 255, g: 100, b: 100}),
      new iro.Color({r: 100, g: 255, b: 100}),
      new iro.Color({r: 100, g: 100, b: 255}),
      new iro.Color({r: 255, g: 255, b: 100}),
      new iro.Color({r: 255, g: 100, b: 255}),
      new iro.Color({r: 100, g: 255, b: 255}),
      new iro.Color({r: 150, g:  30, b: 220}),
      new iro.Color({r:  20, g: 150, b:  80}),
      new iro.Color({r: 150, g: 180, b:   0}),
      new iro.Color({r: 150, g: 255, b:   0}),
      new iro.Color({r:   0, g:   0, b:   0}),
      new iro.Color({r: 255, g: 255, b: 255}),
      new iro.Color({r:   0, g: 100, b: 100}),
      new iro.Color({r: 150, g:  50, b:  20}),
      new iro.Color({r: 150, g: 100, b: 100})
    ];
  }

  colorPalette: iro.Color[];
}
