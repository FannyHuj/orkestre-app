import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signIn(user: FormData): Observable<any> {
    return this.http.post('http://localhost:8000/api/signIn', user);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/getUserById/${id}`);
  }

  getProfileInfo(id:number): Observable<User> {
    return this.http.get<User>(`http://localhost:8000/api/getProfileInfo/${id}`); 
  }

  updateProfileInfos(id: number, formData: FormData): Observable<User> {
  return this.http.post<User>(
    `http://localhost:8000/api/updateProfileInfo/${id}`, 
    formData
  );
}

}
