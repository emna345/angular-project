import { TestBed } from '@angular/core/testing';

import { ExamenphysiqueService } from './examenphysique.service';

describe('ExamenphysiqueService', () => {
  let service: ExamenphysiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenphysiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
