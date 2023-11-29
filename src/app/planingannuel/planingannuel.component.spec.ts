import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningannuelComponent } from './planingannuel.component';

describe('PlaningannuelComponent', () => {
  let component: PlaningannuelComponent;
  let fixture: ComponentFixture<PlaningannuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningannuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaningannuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
