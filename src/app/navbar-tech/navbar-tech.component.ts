import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuivitechComponent } from '../suivitech/suivitech.component';
import { PlaningjourComponent } from '../planingjour/planingjour.component';
import { PlaningannuelComponent } from '../planingannuel/planingannuel.component';
import { HometechComponent } from '../hometech/hometech.component';

@Component({
  selector: 'app-navbar-tech',
  templateUrl: './navbar-tech.component.html',
  styleUrls: ['./navbar-tech.component.css']
})
export class NavbarTechComponent {
  [x: string]: any;
  currentComponent: any;
  
 hometechcomponent=HometechComponent;

  constructor(private router: Router) {
    this.currentComponent = this.hometechcomponent;
  }


  goToPlaningjour() {
    this.currentComponent = PlaningjourComponent;
    
  }

  goToPlaningannuel() {
    this.currentComponent = PlaningannuelComponent;
  
  }
  goTohome(){
    this.currentComponent=HometechComponent;
}
}
