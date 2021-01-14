import { Component, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  popUp: string;
  data: DataService

  constructor(_data: DataService) {
    this.data = _data;
  }

  // Hostlistener that checks if there is a click outside of the
  // the scope of the pop up div.
  @HostListener('document:click', ['$event'])
  closePopUp(e: any): void {
    // saves the target and pop up div to memory.
    let target = e.target || e.srcElement || e.currentTarget;
    let popUpWindow = document.getElementById("pop-up-container");
    
    // If they are not the same and popup isn't already null and the target isn't a button then it will set the popUp value to null.
    if (target.offsetParent != popUpWindow && this.popUp != null && target.tagName != "BUTTON") {
      this.popUp = null;
    }
  }

  // Changes the popup variable to the selected value (bound to each button).
  switchChange(input: string) : void {
    this.popUp = input;
  }
}

