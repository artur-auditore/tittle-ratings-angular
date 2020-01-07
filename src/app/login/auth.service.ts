import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: String;

  loginUrl = "http://localhost:8000/api/token/";

  constructor(private router: Router, private http: HttpClient) {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: any){
    return this.http.post(this.loginUrl, user);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  
}
