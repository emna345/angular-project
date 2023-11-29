import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coordinateur-login',
  templateUrl: './coordinateur-login.component.html',
  styleUrls: ['./coordinateur-login.component.css']
})
export class CoordinateurLoginComponent {
  username!: string;
  password!: string;

  constructor(public modal: NgbActiveModal, private modalService: NgbModal, private router: Router) {}

  openModal(modal: any) {
    let modalRef = this.modalService.open(modal);

    if (modal === 'Coordinateur technique') {
      modalRef = this.modalService.open(CoordinateurLoginComponent);
    } else {
      // TODO: Implement other user types
      console.log(`TODO: Implement ${modal} login`);
      return;
    }

    modalRef.result.then(() => {
      console.log('Modal closed');
    }).catch(() => {
      console.log('Modal dismissed');
    });
  }

  login() {
    if (this.username === 'athlete' && this.password === 'password') {
      this.modal.close();
  
      // Navigate to the dashboard component
      this.router.navigate(['modal']);
    } else {
      alert('Incorrect username or password');
    }
  }
  }



