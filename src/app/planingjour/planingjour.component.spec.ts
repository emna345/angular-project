import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningjourComponent } from './planingjour.component';

describe('PlaningjourComponent', () => {
  let component: PlaningjourComponent;
  let fixture: ComponentFixture<PlaningjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningjourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaningjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
