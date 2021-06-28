import { TestBed } from '@angular/core/testing';

import { JaganLibService } from './jagan-lib.service';

describe('JaganLibService', () => {
  let service: JaganLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaganLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
