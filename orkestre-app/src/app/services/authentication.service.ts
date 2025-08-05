import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { Login } from '../shared/models/login';
import { Auth } from '../shared/models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  token: string | null = null;
  private isUserLogged: boolean = false;

  constructor(private cookieService: CookieService, private http: HttpClient) {
       const token = this.cookieService.get('jwtToken');
    if (token) {
      this.isUserLogged = true;
    }
  }

  setToken(token: string) {
    this.cookieService.set('jwtToken', token);

  }

  getToken(): string {
    return this.cookieService.get('jwtToken');
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token); // Jwt token decoding
    } catch (Error) {
      return null;
    }
  }

  getUser(): Observable<any> {
    let user: User = {} as User; // Création d'un objet user
    let tokenInfo = this.getDecodedAccessToken(this.getToken()); // Récupération du Token
    user.email = tokenInfo.username; // L'attribut mail de l'objet user est égal à l'attribut mail (username) contenu dans le token
    return this.http.get(
      `http://localhost:8000/api/user/${tokenInfo.username}`
    ); // envoie le user à PHP
  }

  login(login: Login): Observable<Auth> {
    this.isUserLogged = true;
    return this.http.post<Auth>('http://localhost:8000/api/login_check', login);
  }

  logout() {
    this.cookieService.delete('jwtToken');
    this.isUserLogged = false;
  }

  isUserConnected(): boolean {
    return this.isUserLogged;
  }
}
