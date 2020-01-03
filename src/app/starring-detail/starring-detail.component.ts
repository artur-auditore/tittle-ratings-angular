import { StarringService } from './../starring-list/starring.service';
import { Component, OnInit, Input } from '@angular/core';
import {Starring} from '../model/Starring'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-starring-detail',
  templateUrl: './starring-detail.component.html',
  styleUrls: ['./starring-detail.component.css']
})
export class StarringDetailComponent implements OnInit {
  @Input() starring: Starring;
  constructor(private route: ActivatedRoute,
    private starringService: StarringService,
    private location: Location) { }

  ngOnInit() {
    this.getStarring();
  }

  getStarring(){
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.starringService.getStarring(pk).subscribe(starring => this.starring = starring)
  }

  goBack(): void {
    this.location.back();
  }
}
