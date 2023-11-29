import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AthleteLoginComponent } from './athlete-login/athlete-login.component';
import { ExPhysiqueComponent } from './ex-physique/ex-physique.component';
import { ExamenCliniqueComponent } from './examen-clinique/examen-clinique.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarMedicalComponent } from './navbar-medical/navbar-medical.component';
import { NavbarTechComponent } from './navbar-tech/navbar-tech.component';
import { PlaningannuelComponent } from './planingannuel/planingannuel.component';
import { SportifComponent } from './sportif/sportif.component';
import { SuivComponent } from './suiv/suiv.component';
import { SuivitechComponent } from './suivitech/suivitech.component';
import { SuivmedicalComponent } from './suivmedical/suivmedical.component';
import { BilanNutrtionnelComponent } from './bilan-nutrtionnel/bilan-nutrtionnel.component';
import { AthleteComponent } from './athlete/athlete.component';
import { NavbarAthComponent } from './navbar-ath/navbar-ath.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashbordAthComponent } from './dashbord-ath/dashbord-ath.component';
import { CoordinateurLoginComponent } from './coordinateur-login/coordinateur-login.component';
import { EntraineurLoginComponent } from './entraineur-login/entraineur-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaningjourComponent } from './planingjour/planingjour.component';
import { HomeComponent } from './home/home.component';
import { HometechComponent } from './hometech/hometech.component';
import { DashbCoachComponent } from './dashb-coach/dashb-coach.component';
import { PlaningAnnAthComponent } from './planing-ann-ath/planing-ann-ath.component';
import { PlaningJourAthComponent } from './planing-jour-ath/planing-jour-ath.component';
import { ProfileAthDashComponent } from './profile-ath-dash/profile-ath-dash.component';
import { HomeAthDashComponent } from './home-ath-dash/home-ath-dash.component';
import { DashboardAthComponent } from './dashboard-ath/dashboard-ath.component';
import { TournoisComponent } from './tournois/tournois.component';
import { CompetitionComponent } from './competition/competition.component';
import { EmploiComponent } from './emploi/emploi.component';
import { AthleteCorComponent } from './athlete-cor/athlete-cor.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCoachComponent } from './profile-coach/profile-coach.component';
import { TableauAthComponent } from './tableau-ath/tableau-ath.component';
import { SuivmedcoachComponent } from './suivmedcoach/suivmedcoach.component';
import { BilaneffortmaximalComponent } from './bilaneffortmaximal/bilaneffortmaximal.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { NavactivationComponent } from './navactivation/navactivation.component';
import { ActivationComponent } from './activation/activation.component';

const routes: Routes = [
  { path: 'home', component: AcceuilComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'suiv', component: SuivComponent },
  { path: 'athlete', component: AthleteLoginComponent },
  { path: 'navbar', component: NavbarMedicalComponent },
  {path:'suivmedco',component:SuivmedcoachComponent},
  { path: 'ex-physique', component: ExPhysiqueComponent },
  { path: 'bilan-maxi', component:BilaneffortmaximalComponent },
  { path: 'exclinique', component: ExamenCliniqueComponent },
  {path:'hom',component:HomeComponent},
  { path: 'navbartech', component: NavbarTechComponent},
  {path:'homtech',component:HometechComponent},
  { path: 'bilan', component: BilanNutrtionnelComponent },
  { path: 'sportif', component: SportifComponent },
  { path: 'ath', component: AthleteComponent },
  { path: 'navath', component: NavbarAthComponent },
  { path: 'inscri', component: InscriptionComponent },
  { path: 'dash',component: DashbordAthComponent},
  { path: 'planningjour', component: PlaningjourComponent},
  { path: 'planningannuel', component: PlaningannuelComponent },
  { path: 'coord', component: CoordinateurLoginComponent },
  { path: 'entraineur', component: EntraineurLoginComponent },
  {path:'sidebar',component:SidebarComponent},
  {path:'dash-ath',component:DashboardAthComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'dash-coach',component:DashbCoachComponent},
  { path: 'suivmedical', component: SuivmedicalComponent },
  {path:'plan-an-ath',component:PlaningAnnAthComponent},
  {path:'plan-jour-ath',component:PlaningJourAthComponent},
  {path:'profile-ath',component:ProfileAthDashComponent},
  {path:'home-ath',component:HomeAthDashComponent},
  {path:'tournois',component:TournoisComponent},
  {path:'competition',component:CompetitionComponent},
  {path:'emploi',component:EmploiComponent},
  {path:'ath-cor',component:AthleteCorComponent},
  {path:'profile-coach',component:ProfileCoachComponent},
  {path:'tableau-ath',component:TableauAthComponent},
  {path:'dossmedical',component:DossiermedicalComponent},
  {path:'navactivation',component:NavactivationComponent},
  {path:'activation',component:ActivationComponent},
  { path: '**', component: AcceuilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
