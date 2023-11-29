import { TestBed } from '@angular/core/testing';

import { ExamencliniqueService } from './examenclinique.service';

describe('ExamencliniqueService', () => {
  let service: ExamencliniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamencliniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
