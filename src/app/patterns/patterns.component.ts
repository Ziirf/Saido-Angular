import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import '../../models/patterns.model';
import { HttpService } from '../services/http-service.service';
import { HexService } from '../services/hex.service';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent implements OnInit {

  patternsArray : PatternModel[];
  selectedPattern : PatternModel;
  editProperties: boolean = false;
  data: DataService;

  constructor(
    private _data: DataService,
    private httpService: HttpService,
    private hexService: HexService
  ) { 
    this.data = _data;
  }

  ngOnInit(): void {
    // Makes an array of the patterns.
    this.patternsArray = this.data.patternsArray;
  }

  // Click event used in the HTML to send a POST to the ESP32.
  // Changes the current selected pattern.
  public clickPattern(pattern: PatternModel) : void{
    this.selectedPattern = pattern;

    this.httpService.postRequest(pattern.id, 'todo', this.hexService.intToHex(this.data.brightness));
    //var request = new XMLHttpRequest();
    //request.open('POST',`?${ pattern.id }`);
    //request.send();
  }
}