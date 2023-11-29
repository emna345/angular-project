import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { data } from 'jquery';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {
 
  name:string="";
  Prenom:string="";
  email:string="";
  password:string="";
  date:Date= new Date();
  age:number=0;
  genre:string="";
  role:string="";
  mobile:Number=0;
  inscription :any;
  constructor(private http:HttpClient,) {

  }
  isValid(): boolean{
     
    return this.age >=12 && this.age <= 40;
  

}
register(): void {

  if (this.password.length < 8) {
    Swal.fire({
      title: 'Erreur',
      text: 'Le mot de passe doit contenir au moins 8 caractères',
      icon: 'error',
    });
    return;
  }

  
  // Validate password format
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(this.password)) {
    Swal.fire({
      title: 'Erreur',
      text: 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre',
      icon: 'error',
    });
    return;
  }
 
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.email)) {
    Swal.fire({
      title: 'Erreur',
      text: 'format ivalide',
      icon: 'error',
    });
    return;
  }

  // Validate mobile number format
  const mobileRegex = /^[0-9]{8}$/;
  if (!mobileRegex.test(this.mobile.toString())) {
    Swal.fire({
      title: 'Erreur',
      text: 'Numéro doit être de 8 chiffres',
      icon: 'error',
    });
    return;
  }

  const bodyData = {
    "nom": this.name,
    "prenom": this.Prenom,
    "email": this.email,
    "mdp": this.password,
    "date": this.date,
    "role": this.role,
    "genre": this.genre,
    "age": this.age,
    "tel": this.mobile,
  };

  this.http.post("http://localhost:8089/api/register", bodyData).subscribe(
    (resultData: any) => {
      console.log(resultData);
      Swal.fire({
        title: 'Success',
        text: 'Inscription avec succèes',
        icon: 'success',
      });
      this.name='';
      this.Prenom='';
      this.email='',
      this.password='';
      this.date=new data();
      this.age=0;
      this.mobile=0;
    },
    (error: any) => {
      console.error('Failed to register user:', error);
      Swal.fire({
        title: 'Erreur',
        text: 'Failed to register user',
        icon: 'error',
      });
    }
  );
}
  
 
 

  

}
