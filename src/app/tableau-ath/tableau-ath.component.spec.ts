import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAthComponent } from './tableau-ath.component';

describe('TableauAthComponent', () => {
  let component: TableauAthComponent;
  let fixture: ComponentFixture<TableauAthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauAthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
