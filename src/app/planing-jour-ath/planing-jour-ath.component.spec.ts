import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningJourAthComponent } from './planing-jour-ath.component';

describe('PlaningJourAthComponent', () => {
  let component: PlaningJourAthComponent;
  let fixture: ComponentFixture<PlaningJourAthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningJourAthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaningJourAthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
