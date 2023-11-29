import { TestBed } from '@angular/core/testing';

import { BilannutritonelService } from './bilannutritonel.service';

describe('BilannutritonelService', () => {
  let service: BilannutritonelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilannutritonelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
