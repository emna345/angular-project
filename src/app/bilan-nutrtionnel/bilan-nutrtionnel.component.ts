import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bilan-nutrtionnel',
  templateUrl: './bilan-nutrtionnel.component.html',
  styleUrls: ['./bilan-nutrtionnel.component.css']
})
export class BilanNutrtionnelComponent {
  constructor(private http: HttpClient,private router: Router,private  modalService: NgbModal) {

    
  }

  users:any;
  utilisateurs:any;
 
  selectedUserId=0;
  nbrentrainement:string="";
  dureemoy:string="";
  nbrrepas:number=0;
  type:string="";
  proteine:string="";
  glucide:string="";
  grasse:string="";
  nomfruit:string="";
  quantite:string="";
  portions:string="";
 
  prise:string="";

  jour:string="";
nom:string="";
 
  selectedDate:Date=new Date();
 
 
 



 
  medications: { nom: string, prise: string,jour:string }[] = []; // Array to hold the medication data

  deleteMedication(index: number): void {
    this.medications.splice(index, 1);
  }
  addMedication(): void {
    this.medications.push({ nom: '',jour: '', prise: '' });
  }
  ngOnInit() {
    this.getathlete();
   
  }
  recherche(){}
  
 role = encodeURIComponent("athlète");
  apiUrl:any;

  getathlete() {
    this.apiUrl = 'http://localhost:8089/api/users/athlète';
  
    this.http.get<any[]>(this.apiUrl)
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
  
  envoyer(athleteId: number): void {
    this.selectedUserId = athleteId;
    if(

      !this.nbrentrainement||
      !this.dureemoy||
      !this.nbrrepas||
      !this.type||
      !this.proteine||
      !this.glucide||
      !this.grasse||
      !this.nomfruit||
      !this.quantite||
      !this.portions||
      !this.selectedDate
     
     
    )
    {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all the required fields',
        icon: 'error',
      });
      return;
    }
    let bodyData={
      athleteid: athleteId,
      nbrentrainement:this.nbrentrainement,
      dureemoy:this.dureemoy,
      nbrrepas:this.nbrrepas,
      type:this.type,
      proteine:this.proteine,
      glucide:this.glucide,
      grasse:this.grasse,
      nomfruit:this.nomfruit,
      quantite:this.quantite,
      portions:this.portions,
      selectedDate:this.selectedDate,
      prise:this.prise,
    
      jour:this.jour,
      nom:this.nom,
    
    
    }
    
    this.http.post("http://localhost:8089/api/bilannut",bodyData).subscribe((resultData:any)=>
    {
    console.log(resultData);
    Swal.fire({
      title: 'Success',
      text: 'Data sent successfully',
      icon: 'success',
    });
    window.location.reload();
    this.nbrentrainement="";
    this.dureemoy="";
    this.nbrrepas=0;
    this.type="";
    this.proteine="";
    this.glucide="";
    this.grasse="";
    this.nomfruit="";
    this.quantite="";
    this.portions="";
    this.selectedDate=new Date();
    this.prise="";
  
    this.jour="";
    this.nom="";
    
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
  onSelectUser(){
    this.getbilannutritionel()
  }
 
  bilan:any;
  bilans: any;
  getbilannutritionel() {
    const apiUrl = `http://localhost:8089/api/bilannutritionel/${this.selectedUserId}`;
  
    this.http.get<any[]>(apiUrl)
      .subscribe(
        (response: any[]) => {
          this.bilans = response; // Assign the response directly to the `bilans` property
          console.log('bilan nutritionel data:', this.bilans);
        },
        (error: any) => {
          console.error('Failed to retrievebilan nutritionel data:', error);
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
    const apiUrl = `http://localhost:8089/api/bilannutritionel/${id}`;
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
 

}
