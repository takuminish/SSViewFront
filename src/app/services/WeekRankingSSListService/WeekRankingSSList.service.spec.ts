/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeekRankingSSListService } from './WeekRankingSSList.service';

describe('Service: NewSSListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekRankingSSListService]
    });
  });

  it('should ...', inject([WeekRankingSSListService], (service: WeekRankingSSListService) => {
    expect(service).toBeTruthy();
  }));
});
