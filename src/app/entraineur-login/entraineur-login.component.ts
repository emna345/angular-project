import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entraineur-login',
  templateUrl: './entraineur-login.component.html',
  styleUrls: ['./entraineur-login.component.css']
})
export class EntraineurLoginComponent {
  username!: string;
  password!: string;


  constructor(public modal: NgbActiveModal, private modalService: NgbModal, private router: Router) {}

  openModal(modal: any) {
    let modalRef = this.modalService.open(modal);

    if (modal === 'Entraineur') {
      modalRef = this.modalService.open(EntraineurLoginComponent);
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
      this.router.navigate(['dash-coach']);
    } else {
      alert('Incorrect username or password');
    }  }


}
