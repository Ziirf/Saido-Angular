import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  popUp: string;


  @HostListener('document:click', ['$event'])
  closePopUp(e: any){
    let target = e.target || e.srcElement || e.currentTarget;
    let popUpWindow = document.getElementById("pop-up-container");
    
    if (target.offsetParent != popUpWindow && this.popUp != null && e.target.tagName != "BUTTON") {
      this.popUp = null;
    }
  }

  switchChange(input: string) {
    this.popUp = input;
  }
}

