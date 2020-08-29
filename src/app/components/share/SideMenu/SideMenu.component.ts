import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SS } from 'src/app/models/SS.model';
import { NewSSListService } from 'src/app/services/NewSSListService/NewSSList.service';
import { WeekRankingSSListService } from 'src/app/services/WeekRankingSSListService/WeekRankingSSList.service';
import { MonthRankingSSListService } from 'src/app/services/MonthRankingSSListService/MonthRankingSSList.service';
import { AllRankingSSListService } from 'src/app/services/AllRankingSSListService/AllRankingSSList.service';

@Component({
  selector: 'app-SideMenu',
  templateUrl: './SideMenu.component.html',
  styleUrls: ['./SideMenu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public newSSList$: Observable<SS[]>;
  public weekRankingSSList$: Observable<SS[]>;
  public monthRankingSSList$: Observable<SS[]>;
  public allRankingSSList$: Observable<SS[]>;

  constructor(
    private newSSListService: NewSSListService,
    private weekRankingSSListService: WeekRankingSSListService,
    private monthRankingSSListService: MonthRankingSSListService,
    private allRankingSSListService: AllRankingSSListService
  ) {}

  ngOnInit() {
    this.newSSList$ = this.newSSListService.fetchNewSSList();
    this.weekRankingSSList$ = this.weekRankingSSListService.fetchWeekRankingSSList();
    this.monthRankingSSList$ = this.monthRankingSSListService.fetchMonthRankingSSList();
    this.allRankingSSList$ = this.allRankingSSListService.fetchAllRankingSSList();
  }
}
