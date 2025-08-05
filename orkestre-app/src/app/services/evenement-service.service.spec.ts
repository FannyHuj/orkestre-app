import { TestBed } from '@angular/core/testing';

import { EvenementServiceService } from './evenement.service';

describe('EvenementServiceService', () => {
  let service: EvenementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
