import { TestBed } from '@angular/core/testing';

import { DetalleDataService } from './detalle-data.service';

describe('DetalleDataService', () => {
  let service: DetalleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
