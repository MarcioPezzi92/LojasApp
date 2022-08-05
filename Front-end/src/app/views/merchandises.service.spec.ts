import { TestBed } from '@angular/core/testing';

import { MerchandisesService } from './merchandises.service';

describe('MerchandisesService', () => {
  let service: MerchandisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchandisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
