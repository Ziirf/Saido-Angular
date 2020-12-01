import { Component, OnInit } from '@angular/core';
import '../models/patterns.model';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent implements OnInit {

  patternsArray : Array<PatternModel>
  selectedPattern : PatternModel;
  editProperties : boolean = false;

  ngOnInit(): void {
    // Makes an array of the patterns.
    this.patternsArray = [
      { id: 11,  name: "Rainbow",     properties: ["slider"]  },
      { id: 12,  name: "Cyclone",     properties: ["slider", "slider", "slider"]  },
      { id: 13,  name: "Jungle",      properties: ["slider", "slider"]  },
      { id: 14,  name: "Fireworks",   properties: ["slider", "slider"]  },
      { id: 15,  name: "Balls",       properties: ["slider", "slider"]  },
      { id: 16,  name: "Strobe",      properties: ["slider", "slider"]  },
      { id: 17,  name: "Meteor",      properties: ["slider", "slider"]  },
      { id: 18,  name: "Half-Light",  properties: ["slider", "slider"]  },
      { id: 19,  name: "Blend",       properties: ["slider", "slider"]  },
      { id: 20,  name: "Fire",        properties: ["slider", "slider"]  },
      { id: 21,  name: "Disco",       properties: ["slider", "slider"]  },
      { id: 22,  name: "Siren",       properties: ["slider", "slider"]  }
    ];
  }

  // Click event used in the HTML to send a POST to the ESP32.
  // Changes the current selected pattern.
  public clickPattern(pattern: PatternModel){
    this.selectedPattern = pattern;

    var request = new XMLHttpRequest();
    request.open('POST',`?${ pattern.id }`);
    request.send();
  }
}