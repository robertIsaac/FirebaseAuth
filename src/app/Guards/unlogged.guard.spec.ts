import { TestBed } from '@angular/core/testing';

import { UnloginGuard } from './unlogin.guard';

describe('UnloggedGuard', () => {
  let guard: UnloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
