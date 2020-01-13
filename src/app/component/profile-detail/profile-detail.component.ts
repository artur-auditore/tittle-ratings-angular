import { ProfilesService } from '../../service/profiles.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../model/Profile';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profile: Profile;

  constructor(private route: ActivatedRoute,
    private profileService: ProfilesService,
    private location: Location) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.profileService.getProfile(pk).subscribe(profile => this.profile = profile)
  }

  goBack(): void {
    this.location.back();
  }

}
