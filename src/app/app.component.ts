import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Saido';

  data: DataService;
  burgerMenuToggle: boolean = false;
  
  constructor(
    private httpService: HttpService,
    _data: DataService
  ) { 
    this.data = _data;
  }

  // Toggles the powerswitch
  togglePower(): void {
    this.httpService.togglePower();
  }

  ngOnInit(){
    // send a request for data.
  }

  // Listens to a click event, if the click is on the burgermenu icon -
  // then it will open the menu, if the click is outside the menu container -
  // then it will close the container.
  @HostListener('document:click', ['$event'])
  closePopUp(e: any) : void {
    let target = e.target || e.srcElement || e.currentTarget;
    let container = document.getElementById("burger-container");

    if(target.classList.contains("menu-icon")){
      this.burgerMenuToggle = true;
    }
    else if (target != container && target.tagName != "LI") {
      this.burgerMenuToggle = false;
    }
  }
}