import { Component } from '@angular/core';
import { HomeAthDashComponent } from '../home-ath-dash/home-ath-dash.component';
import { Router } from '@angular/router';
import { ProfileCoachComponent } from '../profile-coach/profile-coach.component';
import { TableauAthComponent } from '../tableau-ath/tableau-ath.component';
import { SuivmedcoachComponent } from '../suivmedcoach/suivmedcoach.component';
import { DossiermedicalComponent } from '../dossiermedical/dossiermedical.component';

@Component({
  selector: 'app-dashb-coach',
  templateUrl: './dashb-coach.component.html',
  styleUrls: ['./dashb-coach.component.css']
})
export class DashbCoachComponent {




  
  coachImage: string | ArrayBuffer | null = null;

  user:any;
  USER_KEY = 'auth-user';
  ngOnInit(): void {
    const connectedUser = window.sessionStorage.getItem(this.USER_KEY);
    if (connectedUser !== null) {
      this.user = JSON.parse(connectedUser);
      console.log(this.user);
    }

  }

  [x: string]: any;
  currentComponent: any;
  profilecoach=ProfileCoachComponent
  constructor(private router: Router) {
    this.currentComponent=this.profilecoach;  
  }
  goToprofile(){
    this.currentComponent=ProfileCoachComponent;
  }

  goTohome(){
}
goToDossiermedical(){
this.currentComponent=DossiermedicalComponent;
}
goTotableau(){
  this.currentComponent=TableauAthComponent;
}


}
