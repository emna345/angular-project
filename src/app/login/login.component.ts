import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  mdp: string = '';

  constructor(private http: HttpClient,private tokenStorage : TokenService,private router: Router) {}

  login() {
    const email = this.email.trim();
    const password = this.mdp.trim();
  
    // Perform client-side validation
    if (email === '') {
      Swal.fire({
        title: 'Error',
        text: 'Please enter your email',
        icon: 'error',
      });
    } else if (password === '') {
      Swal.fire({
        title: 'Error',
        text: 'Please enter your password',
        icon: 'error',
      });
    } else {
      // Proceed with the HTTP request
      const apiUrl = 'http://localhost:8089/api/login';
      const user = { email: email, mdp: password };
  
      this.http.post(apiUrl, user)
  .subscribe(
    (response: any) => {
      if (response && response.email) {
        this.tokenStorage.saveUser(response);
        if (response.role === 'coordinateur technique') {
          this.router.navigate(['modal']);
        } else if (response.role === 'athlète') {
          this.router.navigate(['dash-ath']);
        } else if (response.role === 'entraîneur') {
          this.router.navigate(['dash-coach']);
        }
        // Handle successful login
        console.log('Login successful:', response);
        Swal.fire({
          title: 'Success',
          text: 'Logged in successfully',
          icon: 'success',
        });
      } else {
        // Handle login error
        console.error('Login failed:', response);
        Swal.fire({
          title: 'Error',
          text: 'Incorrect email or password',
          icon: 'error',
        });
      }
    },
    (error: any) => {
      // Handle request error
      console.error('Login failed:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to login',
        icon: 'error',
      });
    }
  );

    }
  }
  
  
}
