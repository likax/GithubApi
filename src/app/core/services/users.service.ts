import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { API } from '../utils';
@Injectable()
export class UsersService {
  API: string = "https://api.github.com";
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.API}/users`);
    // since={} 
  }

  // არ იმუშავა არ აქვს delete request
  // deleteUser(id:any): Observable<void> {
  //   return this._http.delete<void>(`${this.API}/users/${id}`);
  // }

  getUser(username: string): Observable<User> {
    return this._http.get<User>(`${API}/users/${username}`);
  }

}
//x