import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planingannuel',
  templateUrl: './planingannuel.component.html',
  styleUrls: ['./planingannuel.component.css']
})
export class PlaningannuelComponent  implements OnInit{
  selectedUserId: any;
  constructor(private http: HttpClient,private modalService: NgbModal) {}

  closeResult!: string;
  lieu: string = "";
  date: Date = new Date();
  heure: string = "";
  typeven: string = "";
  users: any[] = [];
  utilisateurs:any;
  selectAllAthletes: boolean = false;

  selectedUserIds: (number | string)[] = [];

  saveChanges(){
    
  }
  onSelectUser(): void {
    if (this.selectedUserIds.includes('all')) {
      this.selectedUserIds = ['all'];
    }
    
  }
  
  
  ngOnInit() {
    this.getAthlete();
    this.selectAllAthletes = true;
  }
  getAthlete() {
    const apiUrl = 'http://localhost:8089/api/users/athlète';
  
    this.http.get<any[]>(apiUrl)
      .subscribe(
        (response: any[]) => {
          this.users = response;
          console.log('Users:', this.users);
        },
        (error: any) => {
          console.error('Failed to retrieve users:', error);
        }
      );
  }
  

bilan:any;
bilans: any;
getPlaningAnnuel(): void {
  if (this.selectedUserIds) {
    let apiUrl = 'http://localhost:8089/api/annuel';
    if (this.selectedUserIds.includes('all')) {
      // Remove 'all' from the selectedUserIds array
      this.selectedUserIds = this.selectedUserIds.filter((id) => id !== 'all');
      apiUrl += 'all';
    } else {
      apiUrl += this.selectedUserIds.join(',');
    }

    this.http.get<any[]>(apiUrl).subscribe(
      (response: any) => {
        this.bilans = Array.isArray(response) ? response : [response];
        console.log('Planing annuel data:', this.bilans);
      },
      (error: any) => {
        if (error.status === 0) {
          console.error('Failed to retrieve planing annuel data: Unknown Error');
        } else {
          console.error('Failed to retrieve planing annuel data:', error.statusText);
        }
      }
    );
  }
}

  
    open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
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
 

  envoyer(): void {
    if (this.selectedUserIds.includes('all')) {
      for (const user of this.users) {
        console.log(user.id)
        let bodyData = {
          athleteid: user.id,
          lieuplan: this.lieu,
          datePlan: this.date,
          heurePlan: this.heure,
          typeVen: this.typeven
        };
  
        this.http
          .post("http://localhost:8089/api/annuel", bodyData)
          .subscribe(
            (resultData: any) => {
              console.log(resultData);
            },
            (error: any) => {
              console.error('Failed to add planning annuel:', error);
            }
          );
      }
    } else {
      
        let bodyData = {
          athleteid: this.selectedUserIds,
          lieuplan: this.lieu,
          datePlan: this.date,
          heurePlan: this.heure,
          typeVen: this.typeven
        };
  
        this.http
          .post("http://localhost:8089/api/annuel", bodyData)
          .subscribe(
            (resultData: any) => {
              console.log(resultData);
            },
            (error: any) => {
              console.error('Failed to add planning annuel:', error);
            }
          );
      
    }
  
    alert("Success");
    this.lieu = '';
    this.date = new Date();
    this.heure = '';
    this.typeven = '';
  }
  
  user:any;
  USER_KEY = 'auth-user';
  @ViewChild('modalContent') modalContent: any;
  updatemodal(user: any) {
    this.user = { ...user }; // Bind the selected user's data to the component property
    // Open the modal
    const modalRef = this.modalService.open(this.modalContent);
  }
  updateUser(id: any): void {
    const apiUrl = `http://localhost:8089/api/annuel/${id}`;
    const updatedUser = { ...this.bilans.find((user: { id: any; }) => user.id === id) }; // Find the user by ID and create a copy

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