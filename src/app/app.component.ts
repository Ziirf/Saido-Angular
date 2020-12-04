import { Component, HostListener } from '@angular/core';
import { HttpService } from './services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Saido';

  public burgerMenuToggle: boolean = false;
  
  constructor(private httpService: HttpService) { }

  // Toggles the powerswitch
  togglePower(){
    this.httpService.togglePower();
  }

  // Listens to a click event, if the click is on the burgermenu icon -
  // then it will open the menu, if the click is outside the menu container -
  // then it will close the container.
  @HostListener('document:click', ['$event'])
  closePopUp(e: any){
    let target = e.target || e.srcElement || e.currentTarget;
    let container = document.getElementById("burger-container");

    if(target.className == "menu-icon"){
      this.burgerMenuToggle = true;
    }
    else if (target != container && target.tagName != "LI") {
      this.burgerMenuToggle = false;
    }
  }
}