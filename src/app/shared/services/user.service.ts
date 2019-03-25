import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../model/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as jwt_decode from "jwt-decode";


@Injectable()
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = environment.baseUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  userAuthentication(userName, password) 
  {
    var data ={"UserName":userName,"Password":password}
    let reqHeader = new HttpHeaders({'Content-Type': 'application/json','No-Auth':'True'});
    return this.http.post(this.rootUrl + 'auth/login', data, { headers: reqHeader });
  }
  getAll() {
    return this.http.get<User[]>(this.rootUrl + 'User');
  }

  getById(id: number) {
    return this.http.get(this.rootUrl + 'User/{id}');
  }

  register(user: User) {
    return this.http.post(this.rootUrl + 'Auth/register', user);
  }

  update(user: User) {
    console.log(user);
    return this.http.put(this.rootUrl + 'User/${user.id}', user);
  }

  delete(id: number) {
    return this.http.delete(this.rootUrl + 'User/${id}');
  }

}
