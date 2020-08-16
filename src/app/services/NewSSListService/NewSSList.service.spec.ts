/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewSSListService } from './NewSSList.service';

describe('Service: NewSSListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewSSListService]
    });
  });

  it('should ...', inject([NewSSListService], (service: NewSSListService) => {
    expect(service).toBeTruthy();
  }));
});
