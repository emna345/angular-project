import { TestBed } from '@angular/core/testing';

import { PlaningjourService } from './planingjour.service';

describe('PlaningjourService', () => {
  let service: PlaningjourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaningjourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
