import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planingjour',
  templateUrl: './planingjour.component.html',
  styleUrls: ['./planingjour.component.css']
})
export class PlaningjourComponent {
  heurematin:string="";
  heurenuit:string="";
  heureematin:string="";
  heureapremidi:string="";
  heuresoir:string="";

  dateplaning: Date=new Date;
  heureentrainement:string="";
  heureentrain:string="";
  users: any[] = [];
  utilisateurs:any;
  selectedUserId: any;
  selectedUserIds: (number | string)[] = [];
  selectAllAthletes: boolean = false;
  medications: {  heureentrain:string, heureentrainement: string, }[] = []; // Array to hold the medication data
 

  deleteMedication(index: number): void {
    this.medications.splice(index, 1);
  }
  addMedication(): void {
    this.medications.push({  heureentrain: '', heureentrainement: '' });
  }
  ngOnInit() {
    this.getAthlete();
    this.selectAllAthletes = true;
   
  }
  constructor(private http: HttpClient,private modalService: NgbModal) {
  }
  onSelectUser(): void {
    if (this.selectedUserIds.includes('all')) {
      this.selectedUserIds = ['all'];
    }
    
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
  envoyer(): void {
    if (this.selectedUserIds.includes('all')) {
      let isValid = true;

      // Check time inputs
      if (!this.validateTimeRange(this.heurematin)) {
        isValid = false;
        console.log("Invalid heurematin input");
      }
      if (!this.validateTimeRange(this.heurenuit)) {
        isValid = false;
        console.log("Invalid heurenuit input");
      }
      if (!this.validateTimeRange(this.heureematin)) {
        isValid = false;
        console.log("Invalid heureematin input");
      }
      if (!this.validateTimeRange(this.heureapremidi)) {
        isValid = false;
        console.log("Invalid heureapremidi input");
      }
      if (!this.validateTimeRange(this.heuresoir)) {
        isValid = false;
        console.log("Invalid heuresoir input");
      }
  
      // Check if any of the time inputs are invalid
      if (!isValid) {
        // Handle invalid input
        return;
      }
  
      for (const user of this.users) {
        console.log(user.id)
    let bodyData = {
      athleteid: user.athleteId,
      heuresommeilmatin: this.heurematin,
      heuresommeilnuit: this.heurenuit,
      heurerepasmatin: this.heureematin,
      heurerepasaprmidi: this.heureapremidi,
      heurerepassoir: this.heuresoir,
      
      dateplaning: this.dateplaning,
      heureentrainement:this.heureentrainement,
      heureentrain:this.heureentrain,
     
    };

    this.http.post("http://localhost:8089/api/jour", bodyData)
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
        },
        (error: any) => {
          console.error('Failed to add planning jour:', error);
        }
      );
    }
   } else {
     

        console.log("this.selectedUserIds",this.selectedUserIds)
        let bodyData = {
          athleteid: this.selectedUserIds,
          heuresommeilmatin: this.heurematin,
          heuresommeilnuit: this.heurenuit,
          heurerepasmatin: this.heureematin,
          heurerepasaprmidi: this.heureapremidi,
          heurerepassoir: this.heuresoir,

          dateplaning: this.dateplaning,
          heureentrainement: this.heureentrainement,
          heureentrain: this.heureentrain,
        };
        this.http.post("http://localhost:8089/api/jour", bodyData)
          .subscribe(
            (resultData: any) => {
              console.log(resultData);
            },
            (error: any) => {
              console.error('Failed to add planning jour:', error);
            }
          );
        
      }
        alert("success");
        this.heurematin="";
        this.heurenuit="";
         this.heureematin="";
        this.heureapremidi="";
         this.heuresoir="";
      
        this.dateplaning= new Date();
        this.heureentrainement="";
        this.heureentrain="";
      }
      validateTimeRange(time: string): boolean {
        const minTime = "07:00";
        const maxTime = "20:00";
        return time >= minTime && time <= maxTime;
      }
 
  saveChanges(){
    
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
 

  bilan:any;
  bilans: any; 
  getPlaningJour(): void {
    if (this.selectedUserIds) {
      let apiUrl = 'http://localhost:8089/api/jour';
      if (this.selectedUserIds.includes('all')) {
        this.selectedUserIds = this.selectedUserIds.filter((id) => id !== 'all');
        apiUrl += 'all';
      } else {
        apiUrl += this.selectedUserIds.join(',');
      }

      this.http.get<any[]>(apiUrl).subscribe(
        (response: any[]) => {
          this.bilans = Array.isArray(response) ? response : [response];
          console.log('Planing de jour data:', this.bilans);
        },
        (error: any) => {
          if (error.status === 0) {
            console.error('Failed to retrieve planing jour data: Unknown Error');
          } else {
            console.error('Failed to retrieve planing jour data:', error.statusText);
          }
        }
      );
    }
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
    const apiUrl = `http://localhost:8089/api/jour/${id}`;
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



