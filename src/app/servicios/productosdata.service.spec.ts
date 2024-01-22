import { TestBed } from '@angular/core/testing';

import { ProductosdataService } from './productosdata.service';

describe('ProductosdataService', () => {
  let service: ProductosdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
