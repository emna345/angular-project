import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent {
user:any;
users: any[] = [];
selectedEntraineurId: number | null = null;

  closeResult!: string;
  
  ngOnInit() {
    this.getentraineur();
    this.getathlete();
    
  }
  constructor(private http: HttpClient, private modalService: NgbModal){}
  athletes:any;
  entraineurs:any;
  USER_KEY = 'auth-user';
  @ViewChild('modalContent') modalContent: any;
  openModal(user: any) {
    this.user = { ...user }; // Bind the selected user's data to the component property
    // Open the modal
    const modalRef = this.modalService.open(this.modalContent);
  }
  getentraineur() {
    const apiUrl = 'http://localhost:8089/api/users/entraîneur';
  
    this.http.get<any[]>(apiUrl)
      .subscribe(
        (response: any[]) => {
          this.entraineurs = response.map(user => {
            // Add a new property 'fullName' to store the coach's full name
            user.fullName = `${user.nom} ${user.prenom}`;
            return user;
          });
          console.log('Users:', this.entraineurs);
        },
        (error: any) => {
          console.error('Failed to retrieve users:', error);
        }
      );
  }
  getCoachFullName(coachId: number): string {
    const coach = this.entraineurs.find((user: { id: number; }) => user.id === coachId);
    return coach ? coach.fullName : '';
  }
  
  
  getathlete() {
    const apiUrl = 'http://localhost:8089/api/users/athlète';

    this.http.get<any[]>(apiUrl)
      .subscribe(
        (response: any[]) => {
          this.athletes = response;
          console.log('Users:', this.athletes);
        },
        (error: any) => {
          console.error('Failed to retrieve users:', error);
        }
      );
  }






  updateUser(user: any): void {
    // Copy the user object to avoid modifying the original object
    const updatedUser = { ...user };
  console.log( this.selectedEntraineurId)
    // Assign the selected entraineur ID to the identraineur property
    updatedUser.identraineur = this.selectedEntraineurId;
  console.log( updatedUser.identraineur)
    // Make the HTTP request to update the user data
    const apiUrl = `http://localhost:8089/api/users/${user.id}`;
    this.http.put(apiUrl, updatedUser).subscribe(
      (response: any) => {
        console.log('User updated:', response);
        // Update the connectedUser with the updated values
        window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(response));
        // Display a success message to the user
        Swal.fire({
          title: 'Succès',
          text: 'Affectation avec succès',
          icon: 'success',
        });
       window.location.reload();
      },
      (error: any) => {
        console.error('Failed to update user:', error);
        // Display an error message to the user
        Swal.fire({
          title: 'Erreur',
          text: 'Affectation échouée',
          icon: 'error',
        });
      }
    );
  }
  

open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason: any) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
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
}
