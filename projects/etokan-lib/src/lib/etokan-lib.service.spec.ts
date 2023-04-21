import { TestBed } from '@angular/core/testing';

import { EtokanLibService } from './etokan-lib.service';

describe('EtokanLibService', () => {
  let service: EtokanLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtokanLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
