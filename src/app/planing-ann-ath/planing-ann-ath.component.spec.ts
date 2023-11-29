import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningAnnAthComponent } from './planing-ann-ath.component';

describe('PlaningAnnAthComponent', () => {
  let component: PlaningAnnAthComponent;
  let fixture: ComponentFixture<PlaningAnnAthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningAnnAthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaningAnnAthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
