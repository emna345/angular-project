import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau-ath',
  templateUrl: './tableau-ath.component.html',
  styleUrls: ['./tableau-ath.component.css']
})
export class TableauAthComponent {
  user:any;
  users:any;
  USER_KEY = 'auth-user';

  ngOnInit(): void {
    const connectedUser = window.sessionStorage.getItem(this.USER_KEY);
    if (connectedUser !== null) {
      this.user = JSON.parse(connectedUser);
      console.log(this.user);
    }
    this.getAthlete(this.user.id)
  }
  constructor(private http: HttpClient) {}

  getAthlete(trainerId: number) {
    const apiUrl = `http://localhost:8089/api/users/athlète/${trainerId}`;
  
    this.http.get<any[]>(apiUrl).subscribe(
      (response: any[]) => {
        this.users = response;
        console.log('Athletes:', this.users);
      },
      (error: any) => {
        console.error('Failed to retrieve athletes:', error);
      }
    );
  }
  

}
