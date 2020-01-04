import { RatingsService } from './../service/ratings.service';
import { Component, OnInit } from '@angular/core';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  selectedRating: Rating;
  ratings: Array<any>;

  constructor(private ratingService: RatingsService) { }

  ngOnInit() {
    this.getRatings()
  }

  getRatings(){
    this.ratingService.listar().subscribe(ratings => this.ratings = ratings)
  }

  onSelect(rating: Rating){
    this.selectedRating = rating;
  }

}
