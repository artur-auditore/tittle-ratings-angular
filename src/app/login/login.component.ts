import { Router } from '@angular/router';
import { User } from './../model/User';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User()
  public userdata: any
  usuarioAuthenticated: any
  error: any;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  fazerLogin(){
    this.authservice.fazerLogin(this.user).subscribe(
      ok =>{
        localStorage.setItem('currentUserName', ok['name']);
        localStorage.setItem('currentUserToken', ok['token']);
        this.router.navigate(['/starrings-dashboard'])
      },
      error =>{
        document.getElementById('mensagem').innerHTML = "Usuario não encontrado";
      }
    )
  }
}
