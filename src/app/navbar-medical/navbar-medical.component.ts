import { Component, ComponentFactoryResolver, ComponentRef, NgModule, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ExPhysiqueComponent } from '../ex-physique/ex-physique.component';
import { ExamenCliniqueComponent } from '../examen-clinique/examen-clinique.component';
import { BilanNutrtionnelComponent } from '../bilan-nutrtionnel/bilan-nutrtionnel.component';
import { SportifComponent } from '../sportif/sportif.component';
import { HomeComponent } from '../home/home.component';
import { BilaneffortmaximalComponent } from '../bilaneffortmaximal/bilaneffortmaximal.component';
import { DossiermedicalComponent } from '../dossiermedical/dossiermedical.component';

@Component({
  selector: 'app-navbar-medical',
  templateUrl: './navbar-medical.component.html',
  styleUrls: ['./navbar-medical.component.css']
})
export class NavbarMedicalComponent  {
 
  [x: string]: any;
  currentComponent: any;
  
  homecomponent=HomeComponent;

  constructor(private router: Router) {
    this.currentComponent = this.homecomponent;
  }

  goToExamenClinique() {
    this.currentComponent = ExamenCliniqueComponent;
  }

  goToExamenPhysique() {
    this.currentComponent = ExPhysiqueComponent;
  }
  goToBilanNutritionnel()
  {
    this.currentComponent= BilanNutrtionnelComponent;
  }
  goTohome(){
      this.currentComponent=HomeComponent;
  }
  goToBilaneffot(){
    this.currentComponent=BilaneffortmaximalComponent;
  }
  goTodossirmedical(){
    this.currentComponent=DossiermedicalComponent;
  }
}


