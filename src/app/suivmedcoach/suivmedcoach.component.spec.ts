import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivmedcoachComponent } from './suivmedcoach.component';

describe('SuivmedcoachComponent', () => {
  let component: SuivmedcoachComponent;
  let fixture: ComponentFixture<SuivmedcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivmedcoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivmedcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
