import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {configJson} from '../config/config';
import {Result} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  randomUserApi = configJson.userUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  public getUserDetails(): Observable<Result> {
    return this.http.get<Result>(`${this.randomUserApi}?results=${configJson.numberCards}`);
  }

}
