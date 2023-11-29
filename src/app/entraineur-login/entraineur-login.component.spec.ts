import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraineurLoginComponent } from './entraineur-login.component';

describe('EntraineurLoginComponent', () => {
  let component: EntraineurLoginComponent;
  let fixture: ComponentFixture<EntraineurLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntraineurLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntraineurLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
