import { Component, OnInit } from '@angular/core';
import '../models/patterns.model';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent implements OnInit {

  patternsArray : Array<PatternModel>

  ngOnInit(): void {
    this.patternsArray = new Array<PatternModel>();
    this.patternsArray.push({ id: 1,  name: "Rainbow"    });
    this.patternsArray.push({ id: 2,  name: "Cyclone"    });
    this.patternsArray.push({ id: 3,  name: "Jungle"     });
    this.patternsArray.push({ id: 4,  name: "Fireworks"  });
    this.patternsArray.push({ id: 5,  name: "Balls"      });
    this.patternsArray.push({ id: 6,  name: "Strobe"     });
    this.patternsArray.push({ id: 7,  name: "Meteor"     });
    this.patternsArray.push({ id: 8,  name: "Half-Light" });
    this.patternsArray.push({ id: 9,  name: "Blend"      });
    this.patternsArray.push({ id: 10, name: "Fire"       });
    this.patternsArray.push({ id: 11, name: "Disco"      });
    this.patternsArray.push({ id: 12, name: "Siren"      });
  }

  private clickPattern(pattern: PatternModel){
    console.log(pattern);
  }
}