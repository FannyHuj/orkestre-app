import { TestBed } from '@angular/core/testing';

import { LoginTraceService } from './login-trace.service';

describe('LoginTraceService', () => {
  let service: LoginTraceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTraceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
