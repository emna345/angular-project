import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanNutrtionnelComponent } from './bilan-nutrtionnel.component';

describe('BilanNutrtionnelComponent', () => {
  let component: BilanNutrtionnelComponent;
  let fixture: ComponentFixture<BilanNutrtionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanNutrtionnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanNutrtionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
