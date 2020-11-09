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

  ngOnInit(): void {
    this.patternsArray = new Array<PatternModel>();
    this.patternsArray.push({ id: 11,  name: "Rainbow"    });
    this.patternsArray.push({ id: 12,  name: "Cyclone"    });
    this.patternsArray.push({ id: 13,  name: "Jungle"     });
    this.patternsArray.push({ id: 14,  name: "Fireworks"  });
    this.patternsArray.push({ id: 15,  name: "Balls"      });
    this.patternsArray.push({ id: 16,  name: "Strobe"     });
    this.patternsArray.push({ id: 17,  name: "Meteor"     });
    this.patternsArray.push({ id: 18,  name: "Half-Light" });
    this.patternsArray.push({ id: 19,  name: "Blend"      });
    this.patternsArray.push({ id: 20,  name: "Fire"       });
    this.patternsArray.push({ id: 21,  name: "Disco"      });
    this.patternsArray.push({ id: 22,  name: "Siren"      });
  }

  private clickPattern(pattern: PatternModel){
    this.selectedPattern = pattern;
    var request = new XMLHttpRequest();
      request.open('POST',`?${ pattern.id }`);
      request.send();
  }
}