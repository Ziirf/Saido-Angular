import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { HttpService } from '../../services/http-service.service';
import { HexService } from '../../services/hex.service';
import '../../../models/patterns.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

  data: DataService;

  @Input("pattern")
  pattern : PatternModel;

  @Input("brightness")
  brightness : number;

  @Output()
  returnEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private httpService: HttpService,
    private hexConvert: HexService,
    private _data: DataService
  ) { 
    this.data = _data;
  }

  // Listens to changes of the properties in this component.
  @HostListener('change')
  ngOnChanges() : void {
    this.httpService.postRequest(this.pattern.id, this.hexConvert.intArrayToHex(this.pattern.parameters));
  }

  // Exit this component.
  returnBtn() : void{
    this.returnEvent.emit(false);
  }
}