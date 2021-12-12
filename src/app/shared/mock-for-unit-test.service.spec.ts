import { TestBed } from '@angular/core/testing';

import { MockForUnitTestService } from './mock-for-unit-test.service';

describe('MockForUnitTestService', () => {
  let service: MockForUnitTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockForUnitTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
