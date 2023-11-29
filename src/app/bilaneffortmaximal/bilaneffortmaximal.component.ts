import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bilaneffortmaximal',
  templateUrl: './bilaneffortmaximal.component.html',
  styleUrls: ['./bilaneffortmaximal.component.css']
})
export class BilaneffortmaximalComponent {
  

  typeaccident:string="";
  observation:string="";
  dateaccident:Date=new Date();
  priserepos:string="";
  athleteName: string="";

 
  constructor(private http: HttpClient,private modalService: NgbModal) {}
  ngOnInit() {
    this.getAthlete();
   
  }
  users:any;
  selectedUserId=0;
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

  closeResult!: string;
  open(content: any) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
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
  envoyer(athleteId: number): void {
    this.selectedUserId = athleteId;
let bodyData={
  athleteid: athleteId,
  "typeaccident":this.typeaccident,
  "observation":this.observation,
  "dateaccident":this.dateaccident,
  "priserepos":this.priserepos


}

this.http.post("http://localhost:8089/api/bilanmaxi",bodyData).subscribe((resultData:any)=>
{
console.log(resultData);
alert("success")
this.typeaccident="";
this.observation="";
this.dateaccident=new Date();
this.priserepos="";

})}


onSelectUser(){
  this.getbilanmax()
}
bilans: any;
getbilanmax() {
  const apiUrl = `http://localhost:8089/api/bilanmaxi/${this.selectedUserId}`;

  this.http.get<any[]>(apiUrl)
    .subscribe(
      (response: any[]) => {
        this.bilans = response; // Assign the response directly to the `bilans` property
        console.log('Examen clinique data:', this.bilans);
      },
      (error: any) => {
        console.error('Failed to retrieve examen clinique data:', error);
      }
    );
}



user: any;
USER_KEY = 'auth-user';
@ViewChild('modalContent') modalContent: any;
updatemodal(user: any) {
  this.user = { ...user }; // Bind the selected user's data to the component property
  // Open the modal
  const modalRef = this.modalService.open(this.modalContent);
}
updateUser(id: any): void {
  const apiUrl = `http://localhost:8089/api/bilanmaxi/${id}`;
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
