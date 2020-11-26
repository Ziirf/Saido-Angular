import { Component, OnInit } from '@angular/core';
import '../models/patterns.model';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent implements OnInit {

  patternsArray : Array<PatternModel>
  currentArray : Array<PatternModel>
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
    this.currentArray = this.patternsArray;
  }

  // Click event used in the HTML to send a POST to the ESP32.
  // Changes the current selected pattern.
  private clickPattern(pattern: PatternModel){
    this.selectedPattern = pattern;
    this.changeGridLayout(pattern);

    var request = new XMLHttpRequest();
    request.open('POST',`?${ pattern.id }`);
    request.send();
  }

  private checkPattern(pattern: PatternModel){
    if(this.selectedPattern == null)
      return false;
    else if(this.selectedPattern.id == pattern.id)
      return true;
      
    return false;
  }

  private clickExtendGrid(){
    this.currentArray = this.patternsArray;
  }

  private changeGridLayout(pattern: PatternModel){
    var row = Math.floor(this.patternsArray.findIndex(x => x.id == pattern.id)/3);
    this.currentArray = this.patternsArray.slice(row*3, row*3+3);
  }
}