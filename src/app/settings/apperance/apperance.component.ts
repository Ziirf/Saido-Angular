import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-apperance',
  templateUrl: './apperance.component.html',
  styleUrls: ['./apperance.component.scss']
})
export class ApperanceComponent {

  data: DataService;

  @Output() 
  closeWindowEvent = new EventEmitter<string>();

  constructor(_data: DataService) { 
    this.data = _data;
  }

  // Changes style upon fire.
  styleBtn(index: number): void{
    this.data.style = this.data.styles[index];
    this.closeWindowEvent.emit(null);
  }
}
