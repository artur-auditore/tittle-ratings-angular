import { TestBed } from '@angular/core/testing';

import { StarringService } from './starring.service';

describe('StarringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarringService = TestBed.get(StarringService);
    expect(service).toBeTruthy();
  });
});
