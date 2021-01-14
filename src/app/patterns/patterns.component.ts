import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http-service.service';
import { HexService } from 'src/app/services/hex.service';
import { PatternModel } from 'src/models/patterns.model';

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
    _data: DataService,
    private httpService: HttpService,
    private hexService: HexService
  ) { 
    this.data = _data;
  }

  ngOnInit(): void {
    // Makes an array of the patterns.
    this.patternsArray = this.data.patternsArray;
  }

  // Linked to the slider in HTML
  // Fires upon a change in brightness
  brightnessChange(brightness: number) {
    // saves the brightness in memory
    this.data.color.value = this.data.brightness = brightness;

    // Convert to hex and sends a new request over the httpService.
    let hexBrightness = Math.round((this.data.color.hsv.v / 100) * 255);
    this.httpService.postRequest(this.httpService.lastRequest.id, this.httpService.lastRequest.request, this.hexService.intToHex(hexBrightness));
  }

  // Click event used in the HTML to send a POST to the ESP32.
  // Changes the current selected pattern.
  public clickPattern(pattern: PatternModel): void{
    // Saves the selected pattern in memory.
    this.selectedPattern = pattern;

    // Convert to hex and sends a new request over the httpService.
    let hexBrightness = Math.round((this.data.brightness / 100) * 255);
    // ----- TODO: Convert parameters to hex.
    this.httpService.postRequest(pattern.id, 'todo', this.hexService.intToHex(hexBrightness));
  }
}