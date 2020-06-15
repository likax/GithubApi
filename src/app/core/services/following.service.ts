import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Follow } from 'src/app/models/threetypes';
import { API } from '../utils';
@Injectable()
export class FollowingService {
  API: string = "https://api.github.com";
  constructor(private _http: HttpClient) { }

  getFollowing(username: string,curPage: number,
    pageAmountNum: number): Observable<Follow[]> {
    const params = new HttpParams().set('page', `${curPage}`).set('per_page', `${pageAmountNum}`);
    return this._http.get<Follow[]>(`${API}/users/${username}/following`);
  }
}
