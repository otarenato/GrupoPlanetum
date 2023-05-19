import { TestBed } from '@angular/core/testing';

import { PlanetumService } from './planetum.service';

describe('PlanetumService', () => {
  let service: PlanetumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
