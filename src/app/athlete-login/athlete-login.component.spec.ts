import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteLoginComponent } from './athlete-login.component';

describe('AthleteLoginComponent', () => {
  let component: AthleteLoginComponent;
  let fixture: ComponentFixture<AthleteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
