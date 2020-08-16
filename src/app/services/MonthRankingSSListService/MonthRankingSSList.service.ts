import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SS } from 'src/app/models/SS.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonthRankingSSListService {

  constructor(private http: HttpClient) { }

  fetchMonthRankingSSList():Observable<SS[]> {
    return this.http.get<SS[]>("http://localhost:3000/monthRankingSSList");
  }

  fetchMonthRankingSSListAll():Observable<SS[]> {
    return this.http.get<SS[]>("http://localhost:3000/monthRankingSSListAll");
  }

  }