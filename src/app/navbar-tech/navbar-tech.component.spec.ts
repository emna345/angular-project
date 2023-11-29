import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTechComponent } from './navbar-tech.component';

describe('NavbarTechComponent', () => {
  let component: NavbarTechComponent;
  let fixture: ComponentFixture<NavbarTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
