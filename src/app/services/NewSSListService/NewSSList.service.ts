import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SS } from 'src/app/models/SS.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewSSListService {
  constructor(private http: HttpClient) {}

  fetchNewSSList(): Observable<SS[]> {
    return this.http.get<SS[]>('http://localhost:3000/newSSList');
  }

  fetchNewSSListAll(): Observable<SS[]> {
    return this.http.get<SS[]>('http://localhost:3000/newSSListAll');
  }
}
