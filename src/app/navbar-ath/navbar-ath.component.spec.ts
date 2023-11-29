import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAthComponent } from './navbar-ath.component';

describe('NavbarAthComponent', () => {
  let component: NavbarAthComponent;
  let fixture: ComponentFixture<NavbarAthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
