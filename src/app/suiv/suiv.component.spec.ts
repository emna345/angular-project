import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivComponent } from './suiv.component';

describe('SuivComponent', () => {
  let component: SuivComponent;
  let fixture: ComponentFixture<SuivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
