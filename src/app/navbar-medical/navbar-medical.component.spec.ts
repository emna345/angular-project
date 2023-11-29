import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMedicalComponent } from './navbar-medical.component';

describe('NavbarMedicalComponent', () => {
  let component: NavbarMedicalComponent;
  let fixture: ComponentFixture<NavbarMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
