import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dossiermedical',
 
  templateUrl: './dossiermedical.component.html',

  styleUrls: ['./dossiermedical.component.css']
})
export class DossiermedicalComponent {
  typeaccident:string="";
  observation:string="";
  dateaccident:string="";
  priserepos:string="";
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
  allergiemedica :  string="";
  allergieRespiratoire:  string="";
  allergieAnimaux:  string="";

 
  taille: number = 0;
  poids: number = 0;
  imc: number = 0;
  dateexamen: Date=new Date();
  athleteState: any;
  athleteStateMessage: string = '';

  selectedUserId=0;
  selectedDate:string="";
  modalContent: any;
	closeResult = '';
  users:any;
  utilisateurs:any;
  user: any;
  constructor(private modalService: NgbModal, private modalConfig: NgbModalConfig) {
    // Customize the modal size
    this.modalConfig.size = 'lg'; // 'lg' for large, 'xl' for extra-large
    // Adjust other configuration options if needed
  }
  openPhysiqueModal(content: any) {
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }
  onSelectUser(){
    
  }
  consulter(content:any){
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }

  consulternutritionel(content:any){
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);

  }

  consulterclinique(content:any){
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);

  }

  consulterphysique(content:any)
  {
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);

  }
  openEpreuveModal(content: any) {
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }

  openNutritionModal(content: any) {
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }
  openCliniqueModal(content: any) {
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
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


  imprimer() {
    // Handle print functionality here
  }
 
}
