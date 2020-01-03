import { TitlesServiceService } from './../titles-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  
  titles: Array<any>;

  constructor(private titlesService: TitlesServiceService) { this.titles }

  ngOnInit() {
    this.getTitles()
  }

  getTitles(){
    this.titlesService.listar().subscribe(titles => this.titles = titles)
  }

}
