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
  collapsedGrid : boolean = true;

  ngOnInit(): void {
    // Makes an array of the patterns.
    this.patternsArray = [
      { id: 11,  name: "Rainbow"    },
      { id: 12,  name: "Cyclone"    },
      { id: 13,  name: "Jungle"     },
      { id: 14,  name: "Fireworks"  },
      { id: 15,  name: "Balls"      },
      { id: 16,  name: "Strobe"     },
      { id: 17,  name: "Meteor"     },
      { id: 18,  name: "Half-Light" },
      { id: 19,  name: "Blend"      },
      { id: 20,  name: "Fire"       },
      { id: 21,  name: "Disco"      },
      { id: 22,  name: "Siren"      }
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