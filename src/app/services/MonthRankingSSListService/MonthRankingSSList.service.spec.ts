/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MonthRankingSSListService } from './MonthRankingSSList.service';

describe('Service: NewSSListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthRankingSSListService]
    });
  });

  it('should ...', inject([MonthRankingSSListService], (service: MonthRankingSSListService) => {
    expect(service).toBeTruthy();
  }));
});
