import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './../model/User';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  private userAuthenticaded: boolean = false;
  loginUrl = "http://localhost:8000/api/token/"
  public userdata: any;

  showMenu = new EventEmitter<boolean>()

  constructor(private router: Router, private http: HttpClient) { 

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  getToken(): String{
    return localStorage.getItem('token');
  }
  
  fazerLogin(usuario: User): Observable<any>{
    return this.http.post(this.loginUrl, usuario);
    this.showMenu.emit(true);
    this.userAuthenticaded = true;
  }

  
}
