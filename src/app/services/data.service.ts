import { Injectable, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import '../../models/patterns.model'
import '../../models/style.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  colorPalette: iro.Color[];
  color: iro.Color;
  brightness: number = 100;

  patternsArray: PatternModel[];
  
  styles: Style[];
  style: Style;

  constructor() {
    this.colorPalette = [
    ];

    this.patternsArray = [
      { id: 11, name: "Rainbow",    parameters: [1, 25] },
      { id: 12, name: "Cyclone",    parameters: [90] },
      { id: 13, name: "Jungle",     parameters: [90] },
      { id: 14, name: "Fireworks",  parameters: [90] },
      { id: 15, name: "Balls",      parameters: [90] },
      { id: 16, name: "Strobe",     parameters: [90] },
      { id: 17, name: "Meteor",     parameters: [90] },
      { id: 18, name: "Half-Light", parameters: [90] },
      { id: 19, name: "Blend",      parameters: [90] },
      { id: 20, name: "Fire",       parameters: [90] },
      { id: 21, name: "Disco",      parameters: [90] },
      { id: 22, name: "Siren",      parameters: [90] }
    ];

    this.styles = [
      {
        body:                 'light-body',
        header:               'light-header',
        contentContainer:     'light-content-container',
        bottomContainer:      'light-buttom-container',
        burgerMenu:           'light-burger-menu',
        burgerMenuContainer:  'light-burger-menu-container',
        popUp:                'light-pop-up',
        text:                 'light-text',
        warning:              'light-warning',
        input:                'light-input',
        button:               'light-button',
        buttonActive:         'light-button-active',
        colorPalette:         'light-color-palette',
        colorPaletteActive:   'light-color-palette-active',
        colorPaletteAdd:      'light-color-palette-add',
        slider:               'light-slider',
        switch:               'light-switch',
        switchActive:         'light-switch-active',
        switchInside:         'light-switch-inside',
        switchInsideActive:   'light-switch-inside-active'
      },
      {
        body:                 'dark-body',
        header:               'dark-header',
        contentContainer:     'dark-content-container',
        bottomContainer:      'dark-buttom-container',
        burgerMenu:           'dark-burger-menu',
        burgerMenuContainer:  'dark-burger-menu-container',
        popUp:                'dark-pop-up',
        text:                 'dark-text',
        warning:              'dark-warning',
        input:                'dark-input',
        button:               'dark-button',
        buttonActive:         'dark-button-active',
        colorPalette:         'dark-color-palette',
        colorPaletteActive:   'dark-color-palette-active',
        colorPaletteAdd:      'dark-color-palette-add',
        slider:               'dark-slider',
        switch:               'dark-switch',
        switchActive:         'dark-switch-active',
        switchInside:         'dark-switch-inside',
        switchInsideActive:   'dark-switch-inside-active'
      },
      {
        body:                 'party-body',
        header:               'party-header',
        contentContainer:     'party-content-container',
        bottomContainer:      'party-buttom-container',
        burgerMenu:           'party-burger-menu',
        burgerMenuContainer:  'party-burger-menu-container',
        popUp:                'party-pop-up',
        text:                 'party-text',
        warning:              'party-warning',
        input:                'party-input',
        button:               'party-button',
        buttonActive:         'party-button-active',
        colorPalette:         'party-color-palette',
        colorPaletteActive:   'party-color-palette-active',
        colorPaletteAdd:      'party-color-palette-add',
        slider:               'party-slider',
        switch:               'party-switch',
        switchActive:         'party-switch-active',
        switchInside:         'party-switch-inside',
        switchInsideActive:   'party-switch-inside-active'
      },
      {
        body:                 'terminal-body',
        header:               'terminal-header',
        contentContainer:     'terminal-content-container',
        bottomContainer:      'terminal-buttom-container',
        burgerMenu:           'terminal-burger-menu',
        burgerMenuContainer:  'terminal-burger-menu-container',
        popUp:                'terminal-pop-up',
        text:                 'terminal-text',
        warning:              'terminal-warning',
        input:                'terminal-input',
        button:               'terminal-button',
        buttonActive:         'terminal-button-active',
        colorPalette:         'terminal-color-palette',
        colorPaletteActive:   'terminal-color-palette-active',
        colorPaletteAdd:      'terminal-color-palette-add',
        slider:               'terminal-slider',
        switch:               'terminal-switch',
        switchActive:         'terminal-switch-active',
        switchInside:         'terminal-switch-inside',
        switchInsideActive:   'terminal-switch-inside-active'
      }
    ];
    this.style = this.styles[1];
  }

  brightnessChange(brightness: number) {
    this.brightness = brightness;
    this.color.value = brightness;
    //this.color.value = brightness;
  }
}
