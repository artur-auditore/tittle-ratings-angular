import { User } from './../model/User';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user = new User();
  error: any;
  data = localStorage

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  login(){
    this.authService.login(this.user).subscribe(
      ok => {
        console.log(ok),
        this.data.setItem('currentUserName', ok['username']);
        this.data.setItem('currentUserToken', ok['token']);
        this.router.navigate(['/starrings-dashboard'])
      },
      error => {
        console.log(error);
        document.getElementById('msg').innerHTML = "User not found.";
      });
  }

}
