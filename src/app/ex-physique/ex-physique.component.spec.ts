import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPhysiqueComponent } from './ex-physique.component';

describe('ExPhysiqueComponent', () => {
  let component: ExPhysiqueComponent;
  let fixture: ComponentFixture<ExPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExPhysiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
