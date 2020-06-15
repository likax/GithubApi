import { contributor } from "../../models/threetypes";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from '../utils';

@Injectable()
export class ContributorsService {

  constructor(private _http: HttpClient) {}

  getContributors(
    username: string,
    name: string,
    curPage: number,
    pageAmountNum: number
  ): Observable<contributor[]> {
    const params = new HttpParams()
      .set("page", `${curPage}`)
      .set("per_page", `${pageAmountNum}`);
    return this._http.get<contributor[]>(
      `${API}/repos/${username}/${name}/contributors`,
      {
        params: params
      }
    );
  }
}
