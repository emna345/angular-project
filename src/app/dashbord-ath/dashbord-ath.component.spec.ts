import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAthComponent } from './dashbord-ath.component';

describe('DashbordAthComponent', () => {
  let component: DashbordAthComponent;
  let fixture: ComponentFixture<DashbordAthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordAthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordAthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
