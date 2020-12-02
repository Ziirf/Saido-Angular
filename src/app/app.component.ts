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

  togglePower(){
    this.httpService.togglePower();
  }

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