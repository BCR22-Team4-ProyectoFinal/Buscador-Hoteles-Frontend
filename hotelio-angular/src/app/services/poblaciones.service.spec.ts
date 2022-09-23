import { TestBed } from '@angular/core/testing';

import { PoblacionesService } from './poblaciones.service';

describe('PoblacionesService', () => {
  let service: PoblacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoblacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
