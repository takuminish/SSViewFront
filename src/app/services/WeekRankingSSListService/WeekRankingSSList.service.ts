import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SS } from 'src/app/models/SS.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeekRankingSSListService {

  constructor(private http: HttpClient) { }

  fetchWeekRankingSSList():Observable<SS[]> {
    return this.http.get<SS[]>("http://localhost:3000/weekRankingSSList");
  }

  fetchWeekRankingSSListAll():Observable<SS[]> {
    return this.http.get<SS[]>("http://localhost:3000/weekRankingSSListAll");
  }
}