import { TestBed } from '@angular/core/testing';

import { AmosraAgroService } from './amosra-agro.service';

describe('AmosraAgroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmosraAgroService = TestBed.get(AmosraAgroService);
    expect(service).toBeTruthy();
  });
});
