import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./authorization/authorization.component";
import {NewUser} from "./registration/registration.component";

const base_url = "url"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(user: User): Observable<{token: string}>{
    return this.http.post<{token:string}>(base_url, user)
  }

  register(user: NewUser): Observable<{token: string}>{
    return this.http.post<{token:string}>(base_url, user)
  }
  logout(){
    localStorage.removeItem('token');
  }


  getToken() {
    // Получить токен из localStorage
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return true;
    // Проверить наличие токена в localStorage
    const token = this.getToken();
    return token != null;
  }
}
