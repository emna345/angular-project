import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteCorComponent } from './athlete-cor.component';

describe('AthleteCorComponent', () => {
  let component: AthleteCorComponent;
  let fixture: ComponentFixture<AthleteCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteCorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
