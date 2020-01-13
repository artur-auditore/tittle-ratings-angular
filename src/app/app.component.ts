import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title Ratings';

  showMenu = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    
  }
}
