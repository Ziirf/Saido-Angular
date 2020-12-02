import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import '../../../models/patterns.model';
import { HttpService } from '../../services/http-service.service';
import { stringify } from 'querystring';
import { HexService } from '../../services/hex.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

  constructor(
    private httpService: HttpService,
    private hexConvert: HexService
    ) { }

  @Input("pattern")
  pattern : PatternModel;

  @Output()
  escapeEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  //TODO:
  @HostListener('change')
  ngOnChanges() {
    this.httpService.postRequest(this.pattern.id, this.hexConvert.intArrayToHex(this.pattern.parameters));
  }

  colorChange(value: string){
    return parseInt(value);
  }

  escape(){
    this.escapeEvent.emit(false);
  }
}