import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AthleteLoginComponent } from '../athlete-login/athlete-login.component';
import { EntraineurLoginComponent } from '../entraineur-login/entraineur-login.component';
import { CoordinateurLoginComponent } from '../coordinateur-login/coordinateur-login.component';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private http: HttpClient,  ) { }

 
 

}
