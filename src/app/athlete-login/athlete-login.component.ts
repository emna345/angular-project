import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DashbCoachComponent } from '../dashb-coach/dashb-coach.component';
import { User } from '../user';

@Component({
  selector: 'app-athlete-login',
  templateUrl: './athlete-login.component.html',
  styleUrls: ['./athlete-login.component.css']
})
export class AthleteLoginComponent {

  username!: string;
  password!: string;

  constructor(public modal: NgbActiveModal, private modalService: NgbModal, private router: Router) {}

  openModal(userType: string) {
    let modalRef;

    if (userType === 'Athléthe') {
      modalRef = this.modalService.open(AthleteLoginComponent);
    } else {
    
      console.log(`TODO: Implement ${userType} login`);
      return;
    }

    modalRef.result.then(() => {
      console.log('Modal closed');
    }).catch(() => {
      console.log('Modal dismissed');
    });
  }

  login() {
    if (this.username ==='athlete' && this.password ==='1234') {
      this.modal.close();
      this.router.navigate(['dash-ath']);
    } else {
      alert('Incorrect username or password');
    }
  }

 
}
