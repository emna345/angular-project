import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-examen-clinique',
  templateUrl: './examen-clinique.component.html',
  styleUrls: ['./examen-clinique.component.css']
})
export class ExamenCliniqueComponent {
  users:any;
  utilisateurs:any;
  selectedUserId=0;


  ngOnInit() {
    this.getAthlete();
   
  }
  onSelectUser(){
    this.getexamenclinique()
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
  echographiecaradiaque:string="";
  echographieabdo:string="";
  echographievascu:string="";
  echographiemusculo:string="";
  echographiepartie:string="";
  testbiologique:string="";
  nfstest:string="";
  testglycine:string="";
  testdurre:string="";
  testcreate:string="";
  testasat:string="";
  testalat:string="";
  allergiealiment: string="";
  allergiemedica :string="";
  allergieRespiratoire:string="";
  allergieAnimaux:string="";
  selectedDate= new Date();

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal
  ) { 


  }
  


  user: any;
 
  @ViewChild('modalContent') modalContent: any;
  updatemodal(user: any) {
    this.user = { ...user }; // Bind the selected user's data to the component property
    // Open the modal
    const modalRef = this.modalService.open(this.modalContent);
  }
  updateUser(id: any,date:any): void {
    const apiUrl = `http://localhost:8089/api/examenclinique/${id}/${date}`;
    const updatedUser = { ...this.bilans }; // Copy the user object to avoid modifying the original object
  console.log("updatedUser",updatedUser)
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
  
  envoyer(athleteId: number): void {
    this.selectedUserId = athleteId;
  
    // Check if any of the required fields are empty
    if (
     
      !this.echographiecaradiaque||
      !this.echographieabdo||
      !this.echographievascu||
      !this.echographiemusculo||
      !this.echographiepartie||
      !this.testbiologique ||
      !this.nfstest ||
      !this.testglycine ||
      !this.testdurre ||
      !this.testcreate ||
      !this.testasat ||
      !this.testalat ||
      !this.selectedDate
    ) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all the required fields',
        icon: 'error',
      });
      return;
    }
  
      let bodyData = {
      athleteid: athleteId,
      allergiealiment:this. allergiealiment,
      allergiemedica:this.allergiemedica ,
      allergieRespiratoire:this.allergieRespiratoire,
      allergieAnimaux:this.allergieAnimaux,

      selectedDate:this.selectedDate,
      echographiecaradiaque: this.echographiecaradiaque,
      echographieabdo:this.echographieabdo,
      echographievascu:this.echographievascu,
      echographiemusculo:this.echographiemusculo,
      echographiepartie:this.echographiepartie,
      testbiologique: this.testbiologique,
      nfstest: this.nfstest,
      testglycine: this.testglycine,
      testduree: this.testdurre,
      testcreat: this.testcreate,
      testasat: this.testasat,
      testalat: this.testalat
    };
  
    this.http.post("http://localhost:8089/api/exclinique", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        Swal.fire({
          title: 'Success',
          text: 'Data sent successfully',
          icon: 'success',
        });
        window.location.reload();
        this.allergiealiment = "";
        this.allergiemedica = "";
        this.allergieRespiratoire = "";
        this.allergieAnimaux = "";
       this.selectedDate= new Date();
        this.echographiecaradiaque="";
        this.echographieabdo="";
        this.echographievascu="";
        this.echographiemusculo="";
        this.echographiepartie="";
        this.testbiologique = "";
        this.nfstest = "";
        this.testglycine = "";
        this.testdurre = "";
        this.testcreate = "";
        this.testasat = "";
        this.testalat = "";
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
  
  USER_KEY = 'auth-user';
bilan:any;
bilans: any = {};
onDateSelected() {
  this.getexamenclinique();
}
getexamenclinique() {
  const selectedDate = new Date(this.selectedDate); // Convert to a Date object
  
  const formattedDate = selectedDate.toISOString().split('T')[0]; // Get the date in the format "yyyy-mm-dd"
  console.log(this.selectedDate)
  console.log(formattedDate)

  const apiUrl = `http://localhost:8089/api/examenclinique/${this.selectedUserId}/${formattedDate}`;

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


  /*updateexamen(): void {
    const apiUrl = `http://localhost:8089/api/examenclinique/${this.selectedUserId}`;
    const updatedbilan = { ...this.bilan }; // Copy the  object to avoid modifying the original object
  
    // Make the HTTP request to update the  data
    this.http.put(apiUrl, updatedbilan).subscribe(
      (response: any) => {
        console.log(' updated:', response);
        // Update the connectedUser with the updated values
        window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(response));
        // Display a  message to the user
        Swal.fire({
          title: 'Success',
          text: ' updated successfully',
          icon: 'success',
        });
      },
      (error: any) => {
        console.error('Failed to update :', error);
        // Display an error message to the user
        Swal.fire({
          title: 'Error',
          text: 'Failed ',
          icon: 'error',
        });
      }
    );
  }*/
 
  closeResult!: string;
  open(content: any) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  saveChanges(){}
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
