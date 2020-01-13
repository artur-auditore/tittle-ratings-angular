import { User } from './../model/User';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any
  input;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    };
  }

  login() {
    this.authService.login(this.input).subscribe(
      success => this.router.navigate(['starrings-dashboard']),
      error => this.error = error
    );
  }

  logout(){
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  homePage(){
    this.router.navigate(['starrings-dashboard'])
  }

}
