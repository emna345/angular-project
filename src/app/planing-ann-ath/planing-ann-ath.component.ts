import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planing-ann-ath',
  templateUrl: './planing-ann-ath.component.html',
  styleUrls: ['./planing-ann-ath.component.css']
})
export class PlaningAnnAthComponent {
  userPlaningAnnuel: any; // Assuming the planingannu object has a similar structure
  user: any;

  constructor(private http: HttpClient) {}

  goToPlaningannuel() {
    const userId = this.user.id; // Replace with the actual user ID
    this.http.get(`http://localhost:8089/api/annuel/${userId}`).subscribe(
      (response) => {
        this.userPlaningAnnuel = response;
      },
      (error) => {
        console.error('Failed to fetch annual plan:', error);
      }
    );
  }
plans:any[] = [];
USER_KEY = 'auth-user';
ngOnInit() {
  const connectedUser = window.sessionStorage.getItem(this.USER_KEY);
    if (connectedUser !== null) {
      this.user = JSON.parse(connectedUser);
      console.log(this.user);
    }
  this.getplanannuel(this.user.id);

}


  getplanannuel(id:any) {
    const apiUrl = `http://localhost:8089/api/annuel/${id}`;

    this.http.get<any[]>(apiUrl).subscribe(
      (response: any) => {
        this.plans = response; // Wrap the response object in an array
        console.log('Examen physique data:', this.plans);
      },
      (error: any) => {
        console.error('Failed to retrieve examen physique data:', error);
      }
    );
  }

}
