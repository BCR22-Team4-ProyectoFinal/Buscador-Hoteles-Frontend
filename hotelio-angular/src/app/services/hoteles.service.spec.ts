import { TestBed } from '@angular/core/testing';

import { HotelesService } from './hoteles.service';

describe('HotelesService', () => {
  let service: HotelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
