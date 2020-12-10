import { Component, HostListener } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  popUp: string;
  data: DataService

  constructor(private _data: DataService) {
    this.data = _data;
  }

  // Hostlistener that checks if there is a click outside of the
  // the scope of the pop up div.
  @HostListener('document:click', ['$event'])
  closePopUp(e: any) : void {
    let target = e.target || e.srcElement || e.currentTarget;
    let popUpWindow = document.getElementById("pop-up-container");
    
    if (target.offsetParent != popUpWindow && this.popUp != null && target.tagName != "BUTTON") {
      this.popUp = null;
    }
  }

  switchChange(input: string) : void {
    this.popUp = input;
  }
}

