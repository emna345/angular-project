import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planing-jour-ath',
  templateUrl: './planing-jour-ath.component.html',
  styleUrls: ['./planing-jour-ath.component.css']
})
export class PlaningJourAthComponent implements OnInit {
  selectedDate = new Date();
  plans:any;
  USER_KEY = 'auth-user';
  user: any;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    const connectedUser = window.sessionStorage.getItem(this.USER_KEY);
    if (connectedUser !== null) {
      this.user = JSON.parse(connectedUser);
      console.log(this.user);
    }
    
    //this.getplanjour(this.user.id, this.selectedDate);
  }
  
  getplanjour(id: any, date: any) {
    const selectedDate = new Date(date); // Convert to a Date object
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Get the date in the format "yyyy-mm-dd"
    const apiUrl = `http://localhost:8089/api/jour/${id}/${formattedDate}`;
  
    this.http.get<any>(apiUrl).subscribe(
      (response: any) => {
        if (response) {
          this.plans = response;
        } else {
          alert("pas de planning")
          window.location.reload(); // Reload the page if the response is empty
        }
        console.log('Examen physique data:', this.plans);
      },
      (error: any) => {
        alert("pas de planning")
          
        console.error('Failed to retrieve examen physique data:', error);
      }
    );
  }
  
  
  
  onDateSelected() {
    this.getplanjour(this.user.id, this.selectedDate);
  }
}

