import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'LEDProject';

  constructor(){
    // laver to event listeners som tjekker på "Click" og "Resize"
    document.addEventListener('click', menuToggle);
    window.addEventListener('resize', windowSizeChange);
  }
}

// viser/skjuler navigations baren hvis den bliver trykket på mens vinduet -
// er under 600px bred.
function menuToggle(e: any){
  if(window.innerWidth <= 600){
    let target = e.target || e.srcElement || e.currentTarget;

    let menu = document.getElementById("burger-menu");
    let nav =  document.getElementsByTagName("nav")[0];

    
    if(target.className == "menu-icon" && menu.style.display != "none"){
      menu.style.display = "none";
      nav.style.display = "flex";
    }
    else if(target != nav) {
      menu.style.display = "flex";
      nav.style.display = "none";
    }
  }
}

// Sørger for at nav-baren er på dens normale tilstand efter at vinduet -
// har skiftet på et breakpoint.
function windowSizeChange(){
  let menu = document.getElementById("burger-menu");
  let nav =  document.getElementsByTagName("nav")[0];

  if(window.innerWidth <= 600){
    menu.style.display = "flex";
    nav.style.display = "none";
  }
  else{
    menu.style.display = "none";
    nav.style.display = "flex";
  }
}