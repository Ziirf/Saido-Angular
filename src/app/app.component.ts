import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  //title = 'Saido';

  public static powerStatus : boolean = false;
  public static latestRequest : string;
  public burgerMenuToggle: boolean = false;

  togglePower(){
    if (AppComponent.powerStatus == false){
      var request = new XMLHttpRequest();
      request.open('POST', AppComponent.latestRequest || "?1=0000FF" );
      request.send();
      AppComponent.powerStatus = true;
    }
    else{
      var request = new XMLHttpRequest();
      request.open('POST',`?0`);
      request.send();
      AppComponent.powerStatus = false;
    }
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