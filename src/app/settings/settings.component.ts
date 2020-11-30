import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  popUp: string;

  // Hostlistener that checks if there is a click outside of the
  // the scope of the pop up div.
  @HostListener('document:click', ['$event'])
  closePopUp(e: any){
    let target = e.target || e.srcElement || e.currentTarget;
    let popUpWindow = document.getElementById("pop-up-container");
    
    if (target.offsetParent != popUpWindow && this.popUp != null && target.tagName != "BUTTON") {
      this.popUp = null;
    }
  }

  switchChange(input: string) {
    this.popUp = input;
  }
}

