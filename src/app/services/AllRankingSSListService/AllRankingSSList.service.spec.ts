/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllRankingSSListService } from './AllRankingSSList.service';

describe('Service: NewSSListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllRankingSSListService]
    });
  });

  it('should ...', inject([AllRankingSSListService], (service: AllRankingSSListService) => {
    expect(service).toBeTruthy();
  }));
});
