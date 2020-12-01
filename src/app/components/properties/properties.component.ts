import { Component, Input, Output, EventEmitter, Injectable, Injector } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component'
import '../../models/patterns.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

  @Input("pattern")
  pattern : PatternModel;

  @Output()
  escapeEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  getComponent(input: string){
    switch(input){
      case "slider":{
        return SliderComponent;
      }
      case "color-palette":{
        return ColorPaletteComponent;
      }
    }
  }

  escape(){
    this.escapeEvent.emit(false);
  }
}