import { Injectable, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import '../../models/patterns.model'

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  colorPalette: iro.Color[];
  patternsArray: PatternModel[];
  style;

  ngOnInit(): void {
    
  }

  constructor() {
    this.colorPalette = [
    ];

    this.patternsArray = [
      { id: 11, name: "Rainbow", parameters: [1, 25] },
      { id: 12, name: "Cyclone", parameters: [90] },
      { id: 13, name: "Jungle", parameters: [90] },
      { id: 14, name: "Fireworks", parameters: [90] },
      { id: 15, name: "Balls", parameters: [90] },
      { id: 16, name: "Strobe", parameters: [90] },
      { id: 17, name: "Meteor", parameters: [90] },
      { id: 18, name: "Half-Light", parameters: [90] },
      { id: 19, name: "Blend", parameters: [90] },
      { id: 20, name: "Fire", parameters: [90] },
      { id: 21, name: "Disco", parameters: [90] },
      { id: 22, name: "Siren", parameters: [90] }
    ];

    /*this.style = {
      body:                 'light-body',
      header:               'light-header',
      contentContainer:     'light-content-container',
      bottomContainer:      'light-buttom-container',
      burgerMenu:           'light-burger-menu',
      burgerMenuContainer:  'light-burger-menu-container',
      popUp:                'light-pop-up',
      warning:              'light-warning',
      input:                'light-input',
      button:               'light-button',
      buttonActive:         'light-button-active',
      colorPalette:         'light-color-palette',
      colorPaletteActive:   'light-color-palette-active',
      colorPaletteAdd:      'light-color-palette-add',
      slider:               'light-slider',
      switch:               'light-switch',
      switchInside:         'light-switch-inside'
    }*/

    this.style = {
      body:                 'terminal-body',
      header:               'terminal-header',
      contentContainer:     'terminal-content-container',
      bottomContainer:      'terminal-buttom-container',
      burgerMenu:           'terminal-burger-menu',
      burgerMenuContainer:  'terminal-burger-menu-container',
      popUp:                'terminal-pop-up',
      warning:              'terminal-warning',
      input:                'terminal-input',
      button:               'terminal-button',
      buttonActive:         'terminal-button-active',
      colorPalette:         'terminal-color-palette',
      colorPaletteActive:   'terminal-color-palette-active',
      colorPaletteAdd:      'terminal-color-palette-add',
      slider:               'terminal-slider',
      switch:               'terminal-switch',
      switchInside:         'terminal-switch-inside'
    }
  }

}
