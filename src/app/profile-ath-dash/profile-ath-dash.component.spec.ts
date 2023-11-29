import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAthDashComponent } from './profile-ath-dash.component';

describe('ProfileAthDashComponent', () => {
  let component: ProfileAthDashComponent;
  let fixture: ComponentFixture<ProfileAthDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAthDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAthDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
