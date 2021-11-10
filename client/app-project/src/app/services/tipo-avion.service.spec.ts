import { TestBed } from '@angular/core/testing';

import { TipoAvionService } from './tipo-avion.service';

describe('TipoAvionService', () => {
  let service: TipoAvionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAvionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
