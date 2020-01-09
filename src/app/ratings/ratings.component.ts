import { User } from './../model/User';
import { Rating } from './../model/Rating';
import { ProfilesService } from '../service/profiles.service';
import { Title } from './../model/Title';
import { RatingsService } from './../service/ratings.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/Profile';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  
  profile: Profile
  selectedRating: Rating;
  ratings: Array<any>;

  constructor(private ratingService: RatingsService, private profileService: ProfilesService) { }

  ngOnInit() {
    this.getRatings()
  }

  getRatings(){
    this.ratingService.listar().subscribe(ratings => this.ratings = ratings)
  }

  onSelect(rating: Rating){
    this.selectedRating = rating;
  }

  newRating(title: Title, note: number){
    let rating = new Rating();
    rating.title = title;
    rating.note = note;
    this.profile = this.profileService.get(1);
    rating.profile = this.profile;
    this.ratingService.newRating(rating).subscribe(
      rating => this.ratings.push(rating)
    );
  }

}
