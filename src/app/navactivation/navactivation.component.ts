import { Component } from '@angular/core';
import { AthleteComponent } from '../athlete/athlete.component';
import { Router } from '@angular/router';
import { ActivationComponent } from '../activation/activation.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navactivation',
  templateUrl: './navactivation.component.html',
  styleUrls: ['./navactivation.component.css']
})
export class NavactivationComponent {
  [x: string]: any;
  currentComponent: any;
  
  athcomponent=AthleteComponent;

  constructor(private router: Router,private http: HttpClient) {
    this.currentComponent = this.athcomponent;
  }

  goToutilisateur(){
    this.currentComponent = AthleteComponent ;
  }
  goToentraineur(){
    this.currentComponent= ActivationComponent;
  }


  


}