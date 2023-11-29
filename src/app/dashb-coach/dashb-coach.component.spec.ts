import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbCoachComponent } from './dashb-coach.component';

describe('DashbCoachComponent', () => {
  let component: DashbCoachComponent;
  let fixture: ComponentFixture<DashbCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
