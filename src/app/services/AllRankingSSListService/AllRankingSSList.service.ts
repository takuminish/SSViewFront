import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SS } from 'src/app/models/SS.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AllRankingSSListService {
  constructor(private http: HttpClient) {}

  fetchAllRankingSSList(): Observable<SS[]> {
    return this.http.get<SS[]>('http://localhost:3000/allRankingSSList');
  }

  fetchAllRankingSSListAll(): Observable<SS[]> {
    return this.http.get<SS[]>('http://localhost:3000/allRankingSSListAll');
  }
}
