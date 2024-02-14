import { TestBed } from '@angular/core/testing';

import { GolocationService } from './golocation.service';

describe('GolocationService', () => {
  let service: GolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
