import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurLoginComponent } from './coordinateur-login.component';

describe('CoordinateurLoginComponent', () => {
  let component: CoordinateurLoginComponent;
  let fixture: ComponentFixture<CoordinateurLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
