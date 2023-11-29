import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivmedicalComponent } from './suivmedical.component';

describe('SuivmedicalComponent', () => {
  let component: SuivmedicalComponent;
  let fixture: ComponentFixture<SuivmedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivmedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
