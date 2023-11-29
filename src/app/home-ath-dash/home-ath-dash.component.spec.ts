import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAthDashComponent } from './home-ath-dash.component';

describe('HomeAthDashComponent', () => {
  let component: HomeAthDashComponent;
  let fixture: ComponentFixture<HomeAthDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAthDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAthDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
