import { Component, OnInit } from '@angular/core';
import { SS } from 'src/app/models/SS.model';
import { NewSSListService } from 'src/app/services/NewSSListService/NewSSList.service';
import { WeekRankingSSListService } from 'src/app/services/WeekRankingSSListService/WeekRankingSSList.service';
import { MonthRankingSSListService } from 'src/app/services/MonthRankingSSListService/MonthRankingSSList.service';
import { AllRankingSSListService } from 'src/app/services/AllRankingSSListService/AllRankingSSList.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-SSListPage',
  templateUrl: './SSListPage.component.html',
  styleUrls: ['./SSListPage.component.scss'],
})
export class SSListPageComponent implements OnInit {
  public ssList$: Observable<SS[]>;

  constructor(
    private newSSListService: NewSSListService,
    private weekRankingSSListService: WeekRankingSSListService,
    private monthRankingSSListService: MonthRankingSSListService,
    private allRankingSSListService: AllRankingSSListService
  ) {}

  ngOnInit() {
    this.ssList$ = this.newSSListService.fetchNewSSListAll().pipe(share());
  }

  changeSSSelect(value: any) {
    console.log(value);
    switch (value) {
      case 'new':
        this.ssList$ = this.newSSListService.fetchNewSSListAll().pipe(share());
        break;
      case 'week':
        this.ssList$ = this.weekRankingSSListService
          .fetchWeekRankingSSListAll()
          .pipe(share());
        break;
      case 'month':
        this.ssList$ = this.monthRankingSSListService
          .fetchMonthRankingSSListAll()
          .pipe(share());
        break;
      case 'all':
        this.ssList$ = this.allRankingSSListService
          .fetchAllRankingSSListAll()
          .pipe(share());
        break;
    }
  }
}
