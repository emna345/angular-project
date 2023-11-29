import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  USER_KEY = 'auth-user';
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const connectedUser = window.sessionStorage.getItem(this.USER_KEY);
    if (connectedUser !== null) {
      this.user = JSON.parse(connectedUser);
      console.log(this.user);
    }
  }

  updateUser(): void {
    const apiUrl = `http://localhost:8089/api/users/${this.user.id}`;
    const updatedUser = { ...this.user }; // Copy the user object to avoid modifying the original object
  
    // Make the HTTP request to update the user data
    this.http.put(apiUrl, updatedUser).subscribe(
      (response: any) => {
        console.log('User updated:', response);
        // Update the connectedUser with the updated values
        window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(response));
        // Display a success message to the user
        Swal.fire({
          title: 'Success',
          text: 'User updated successfully',
          icon: 'success',
        });
      },
      (error: any) => {
        console.error('Failed to update user:', error);
        // Display an error message to the user
        Swal.fire({
          title: 'Error',
          text: 'Failed to update user',
          icon: 'error',
        });
      }
    );
  }
  
}


  

