import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Repo } from "src/app/models/threetypes";
import { Observable } from "rxjs";
import { API } from '../utils';
@Injectable()
export class RepositoriesService {
  API: string = "https://api.github.com";
  constructor(private _http: HttpClient) {}

  getRepositories(
    username: string,
    curPage: number,
    pageAmountNum: number
  ): Observable<Repo[]> {
    const params = new HttpParams()
      .set("page", `${curPage}`)
      .set("per_page", `${pageAmountNum}`);
    return this._http.get<Repo[]>(`${API}/users/${username}/repos`, {
      params: params,
    });
  }
}
