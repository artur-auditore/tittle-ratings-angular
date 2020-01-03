import { TestBed } from '@angular/core/testing';

import { TitlesServiceService } from './titles-service.service';

describe('TitlesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitlesServiceService = TestBed.get(TitlesServiceService);
    expect(service).toBeTruthy();
  });
});
