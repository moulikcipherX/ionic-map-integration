import { TestBed } from '@angular/core/testing';

import { LatlngService } from './latlng.service';

describe('LatlngService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatlngService = TestBed.get(LatlngService);
    expect(service).toBeTruthy();
  });
});
