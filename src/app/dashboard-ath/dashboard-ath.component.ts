import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HomeAthDashComponent } from '../home-ath-dash/home-ath-dash.component';
import { Router } from '@angular/router';
import { PlaningJourAthComponent } from '../planing-jour-ath/planing-jour-ath.component';
import { PlaningAnnAthComponent } from '../planing-ann-ath/planing-ann-ath.component';
import { ProfileAthDashComponent } from '../profile-ath-dash/profile-ath-dash.component';
import { TournoisComponent } from '../tournois/tournois.component';
import { CompetitionComponent } from '../competition/competition.component';
import { EmploiComponent } from '../emploi/emploi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard-ath',
  templateUrl: './dashboard-ath.component.html',
  styleUrls: ['./dashboard-ath.component.css']
})
export class DashboardAthComponent {
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
  profileath=ProfileAthDashComponent
  constructor(private router: Router) {
    this.currentComponent = this.profileath;
  }
  goTohome(){
this.currentComponent=this['homeathcomponent'];
}
goToPlaning(){
this.currentComponent= PlaningJourAthComponent;
}
goToPlaningannuel(){
this.currentComponent= PlaningAnnAthComponent;
}
goToProfile(){
this.currentComponent= ProfileAthDashComponent;
}
profileImageUrl = '/assets/u.png';

openImagePicker(): void {
  // Trigger the file input click event
  document.getElementById('image-input')?.click();
}

handleImageChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (file) {
    // Read the uploaded file as a data URL
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const imageUrl = e.target?.result as string;
      // Update the profile image source with the selected image
      this.profileImageUrl = imageUrl;
    };
    reader.readAsDataURL(file);
  }
}
}
