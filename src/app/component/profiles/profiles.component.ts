import { ProfilesService } from '../../service/profiles.service';
import { Profile } from '../../model/Profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private profileService: ProfilesService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(){
    this.profileService.listar().subscribe(profiles => this.profiles = profiles)
  }

}
