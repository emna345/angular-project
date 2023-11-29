import { TestBed } from '@angular/core/testing';

import { PlaningannuelService } from './planingannuel.service';

describe('PlaningannuelService', () => {
  let service: PlaningannuelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaningannuelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
