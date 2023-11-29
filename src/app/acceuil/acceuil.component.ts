import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  constructor(config: NgbCarouselConfig) {
    // Customize NgbCarouselConfig here
    config.interval = 2000; // Set the interval between slides (optional)
  }
}
