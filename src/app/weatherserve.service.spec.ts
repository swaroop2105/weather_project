import { TestBed } from '@angular/core/testing';

import { WeatherserveService } from './weatherserve.service';

describe('WeatherserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherserveService = TestBed.get(WeatherserveService);
    expect(service).toBeTruthy();
  });
});
