import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavactivationComponent } from './navactivation.component';

describe('NavactivationComponent', () => {
  let component: NavactivationComponent;
  let fixture: ComponentFixture<NavactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavactivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
