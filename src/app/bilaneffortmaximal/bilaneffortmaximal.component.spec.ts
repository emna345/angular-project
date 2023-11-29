import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilaneffortmaximalComponent } from './bilaneffortmaximal.component';

describe('BilaneffortmaximalComponent', () => {
  let component: BilaneffortmaximalComponent;
  let fixture: ComponentFixture<BilaneffortmaximalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilaneffortmaximalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilaneffortmaximalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
