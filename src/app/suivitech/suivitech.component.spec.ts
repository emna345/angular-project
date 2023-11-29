import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivitechComponent } from './suivitech.component';

describe('SuivitechComponent', () => {
  let component: SuivitechComponent;
  let fixture: ComponentFixture<SuivitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivitechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
