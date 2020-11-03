import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Saido';
  public static powerStatus : boolean = false;
  public static latestRequest : string;

  constructor(){
    // laver to event listeners som tjekker på "Click" og "Resize"
    document.addEventListener('click', this.toggleMenu);
    window.addEventListener('resize', this.windowSizeChange);
  }

  togglePower(){
    if (AppComponent.powerStatus == false){
      var request = new XMLHttpRequest();
      request.open('POST', AppComponent.latestRequest || "?0=0000FF" );
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

  // viser/skjuler navigations baren hvis den bliver trykket på mens vinduet -
  // er under 500px bred.
  toggleMenu(e: any){
    if(window.innerWidth <= 550){
      let target = e.target || e.srcElement || e.currentTarget;
  
      let menu = document.getElementById("burger-menu");
      let nav =  document.getElementsByTagName("nav")[0];
  
      
      if(target.className == "menu-icon" && menu.style.display != null){
        menu.style.display = null;
        nav.style.display = "flex";
      }
      else if(target != nav) {
        menu.style.display = "flex";
        nav.style.display = null;
      }
    }
  }

  // Sørger for at nav-baren er på dens normale tilstand efter at vinduet -
  // har skiftet på et breakpoint.
  windowSizeChange(){
    let menu = document.getElementById("burger-menu");
    let nav =  document.getElementsByTagName("nav")[0];
  
    if(window.innerWidth <= 550){
      menu.style.display = "flex";
      nav.style.display = null;
    }
    else{
      menu.style.display = null;
      nav.style.display = "flex";
    }
  }
}