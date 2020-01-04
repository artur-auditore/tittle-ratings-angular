import { TitlesServiceService } from '../service/titles-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'
import { Title } from '../model/Title';


@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css']
})
export class TitleDetailComponent implements OnInit {

  @Input() title: Title;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private titleService: TitlesServiceService) { }

  ngOnInit() {
    this.getStarring();
  }

  getStarring(){
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.titleService.getTitle(pk).subscribe(title => this.title = title)
  }

  goBack(){
    this.location.back();
  }

}
