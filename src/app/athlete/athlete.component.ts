import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent {
  name:string="";
  Prenom:string="";
  email:string="";
  password:string="";
  date:Date= new Date();
  age:Number=0;
  genre:string="";
  role:string="";
  mobile:Number=0;

  users: any[] = [];
  closeResult!: string;

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
 
  
  deleteUser(user: any): void {
    const apiUrl = `http://localhost:8089/api/users/${user.id}`;
  
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(apiUrl).subscribe(
          () => {
            Swal.fire({
              title: 'Success',
              text: 'User deleted successfully',
              icon: 'success',
            });
            window.location.reload();
            // Perform any additional actions after deleting the user
          },
          (error: any) => {
            console.error('Failed to delete user:', error);
            Swal.fire({
              title: 'Error',
              text: 'Failed to delete user',
              icon: 'error',
            });
          }
        );
      }
    });
  }
  constructor(private http: HttpClient, private modalService: NgbModal,private location: Location ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    const apiUrl = 'http://localhost:8089/api/users';

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
  user: any;
  USER_KEY = 'auth-user';
  @ViewChild('modalContent') modalContent: any;
  openModal(user: any) {
    this.user = { ...user }; // Bind the selected user's data to the component property
    // Open the modal
    const modalRef = this.modalService.open(this.modalContent);
  }
  
  updateUser(user: any): void {
    const apiUrl = `http://localhost:8089/api/users/${user.id}`;
    const updatedUser = { ...user }; // Copy the user object to avoid modifying the original object
  
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
