import { Injectable, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import '../../models/patterns.model'

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  colorPalette: iro.Color[];
  patternsArray: PatternModel[];

  ngOnInit(): void {
    
  }

  constructor() { 
    this.colorPalette = [
    ];

    this.patternsArray = [
      { id: 11,  name: "Rainbow"     ,  parameters: [1, 25]   },
      { id: 12,  name: "Cyclone"     ,  parameters: [90]      },
      { id: 13,  name: "Jungle"      ,  parameters: [90]      },
      { id: 14,  name: "Fireworks"   ,  parameters: [90]      },
      { id: 15,  name: "Balls"       ,  parameters: [90]      },
      { id: 16,  name: "Strobe"      ,  parameters: [90]      },
      { id: 17,  name: "Meteor"      ,  parameters: [90]      },
      { id: 18,  name: "Half-Light"  ,  parameters: [90]      },
      { id: 19,  name: "Blend"       ,  parameters: [90]      },
      { id: 20,  name: "Fire"        ,  parameters: [90]      },
      { id: 21,  name: "Disco"       ,  parameters: [90]      },
      { id: 22,  name: "Siren"       ,  parameters: [90]      }
    ];
  }

}
