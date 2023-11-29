import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SuivitechComponent } from './suivitech/suivitech.component';
import { SuivComponent } from './suiv/suiv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AthleteLoginComponent } from './athlete-login/athlete-login.component';
import { RouterModule, Routes } from '@angular/router';
import { SuivmedicalComponent } from './suivmedical/suivmedical.component';
import { ExamenCliniqueComponent } from './examen-clinique/examen-clinique.component';
import { NavbarMedicalComponent } from './navbar-medical/navbar-medical.component';
import { ExPhysiqueComponent } from './ex-physique/ex-physique.component';
import { NavbarTechComponent } from './navbar-tech/navbar-tech.component';
import { PlaningjourComponent } from './planingjour/planingjour.component';
import { PlaningannuelComponent } from './planingannuel/planingannuel.component';
import { SportifComponent } from './sportif/sportif.component';
import { BilanNutrtionnelComponent } from './bilan-nutrtionnel/bilan-nutrtionnel.component';
import { AthleteComponent } from './athlete/athlete.component';
import { NavbarAthComponent } from './navbar-ath/navbar-ath.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashbordAthComponent } from './dashbord-ath/dashbord-ath.component';
import { EntraineurLoginComponent } from './entraineur-login/entraineur-login.component';
import { CoordinateurLoginComponent } from './coordinateur-login/coordinateur-login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { DashboardAthComponent } from './dashboard-ath/dashboard-ath.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { HometechComponent } from './hometech/hometech.component';
import { DashbCoachComponent } from './dashb-coach/dashb-coach.component';
import { PlaningAnnAthComponent } from './planing-ann-ath/planing-ann-ath.component';
import { PlaningJourAthComponent } from './planing-jour-ath/planing-jour-ath.component';
import { HomeAthDashComponent } from './home-ath-dash/home-ath-dash.component';
import { ProfileAthDashComponent } from './profile-ath-dash/profile-ath-dash.component';
import { TournoisComponent } from './tournois/tournois.component';
import { CompetitionComponent } from './competition/competition.component';
import { EmploiComponent } from './emploi/emploi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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

const routes: Routes=[
    {path:'athlete-login',component:AthleteLoginComponent},
    { path: 'ex-physique', component:ExPhysiqueComponent},
    { path: 'ex-clinique', component: ExamenCliniqueComponent },
    {path:'navbar-tech',component:NavbarTechComponent},
    {path:'planingannuel',component:PlaningannuelComponent},
    {path:'sportif',component:SportifComponent},
    {path:'bilan',component:BilanNutrtionnelComponent},
    {path:'planingjour',component:PlaningannuelComponent},
    
];

@NgModule({
    declarations: [
        AppComponent,
        
        HeaderComponent,
        AcceuilComponent,
        SuivitechComponent,
        SuivComponent,
        AthleteLoginComponent,
        SuivmedicalComponent,
        ExamenCliniqueComponent,
        NavbarMedicalComponent,
        ExPhysiqueComponent,
        NavbarTechComponent,
        PlaningjourComponent,
        PlaningannuelComponent,
        SportifComponent,
        BilanNutrtionnelComponent,
        AthleteComponent,
        NavbarAthComponent,
        InscriptionComponent,
        DashbordAthComponent,
        EntraineurLoginComponent,
        CoordinateurLoginComponent,
        SidebarComponent,
        DashboardAthComponent,
        HomeComponent,
        HometechComponent,
        DashbCoachComponent,
        PlaningAnnAthComponent,
        PlaningJourAthComponent,
        HomeAthDashComponent,
        ProfileAthDashComponent,
        TournoisComponent,
        CompetitionComponent,
        EmploiComponent,
        AthleteCorComponent,
        LoginComponent,
        ProfileComponent,
        ProfileCoachComponent,
        TableauAthComponent,
        SuivmedcoachComponent,
        BilaneffortmaximalComponent,
        DossiermedicalComponent,
        NavactivationComponent,
        ActivationComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule],
    imports: [
        BrowserModule,
        AppRoutingModule, FormsModule,HttpClientModule,
        NgbModule,
        CommonModule,
        NgbCarouselModule,
       
       
        MatToolbarModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        RouterModule.forRoot(routes),
        NgbDropdownModule,
        LayoutModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
       
]})
export class AppModule { }
