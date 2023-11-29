import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ex-physique',
  templateUrl: './ex-physique.component.html',
  styleUrls: ['./ex-physique.component.css']
})
export class ExPhysiqueComponent {
  users: any;
  utilisateurs: any;
  selectedUserId = 0;
  taille: number = 0;
  poids: number = 0;
  imc: number = 0;
  dateexamen: Date=new Date();
  athleteState: any;
  athleteStateMessage: string = '';


  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }
  
  


  closeResult!: string;

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.bilans = { ...this.bilans };
  }
  getAthleteState(imc: number): string {
    if (imc < 18.5) {
      return 'Underweight';
    } else if (imc < 25) {
      return 'Normal weight';
    } else if (imc < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.getAthlete();
  }

  onSelectUser() {
    this.getexamenphysique();
  }

  getAthlete() {
    const apiUrl = 'http://localhost:8089/api/users/athlète';

    this.http.get<any[]>(apiUrl).subscribe(
      (response: any[]) => {
        this.users = response;
        console.log('Users:', this.users);
      },
      (error: any) => {
        console.error('Failed to retrieve users:', error);
      }
    );
  }

  saveChanges() {}

  calculateIMC() {
    if (this.taille > 0 && this.poids > 0) {
      this.imc = this.poids / Math.pow(this.taille / 100, 2);
    } else {
      this.imc = 0;
    }
  }

  
envoyer(athleteId: number): void {
  this.selectedUserId = athleteId;

  // Check if any required fields are empty
  if (!this.taille || !this.poids || !this.imc||!this.dateexamen) {
    Swal.fire({
      title: 'Error',
      text: 'Please fill in all the required fields',
      icon: 'error',
    });
    return;
  }

  if (this.imc < 18.5) {
    this.athleteState = 'Underweight';
  } else if (this.imc < 25) {
    this.athleteState = 'Normal weight';
  } else if (this.imc < 30) {
    this.athleteState = 'Overweight';
  } else {
    this.athleteState = 'Obese';
  }

  this.athleteStateMessage = `Athlete's State: ${this.athleteState}`;

  let bodyData = {
    athleteid: athleteId,
    taille: this.taille,
    poids: this.poids,
    IMC: this.imc,
    dateexamen: this.dateexamen,
  };

  this.http.post('http://localhost:8089/api/exphysique', bodyData).subscribe(
    (resultData: any) => {
      console.log(resultData);
      Swal.fire({
        title: 'Success',
        text: 'Data sent successfully',
        icon: 'success',
        html: this.athleteStateMessage,
      });
      window.location.reload(); // Refresh the page to load the updated data
      this.resetForm();
    },
    (error: any) => {
      console.error('Failed to send data:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to send data',
        icon: 'error',
      });
    }
  );
}

resetForm(): void {
  this.taille = 0;
  this.poids = 0;
  this.calculateIMC();
  this.dateexamen=new Date();
}

  USER_KEY = 'auth-user';
  bilan: any;
  bilans: any;

  getexamenphysique() {
    const apiUrl = `http://localhost:8089/api/examenphysique/${this.selectedUserId}/${this.dateexamen}`;

    this.http.get<any[]>(apiUrl).subscribe(
      (response: any) => {
        this.bilans = response; // Wrap the response object in an array
        console.log('Examen physique data:', this.bilans);
      },
      (error: any) => {
        console.error('Failed to retrieve examen physique data:', error);
      }
    );
  }
  user: any;
 

  @ViewChild('modalContent') modalContent: any;
  updatemodal(user: any) {
    this.user = { ...user }; // Bind the selected user's data to the component property
    // Open the modal
    const modalRef = this.modalService.open(this.modalContent);
  }
  updateUser(id: any,date:any): void {
    const apiUrl = `http://localhost:8089/api/examenphysique/${id}/${date}`;
    const updatedUser = { ...this.bilans }; // Copy the user object to avoid modifying the original object
  
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
        window.location.reload();
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
