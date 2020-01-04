import { TitlesServiceService } from '../service/titles-service.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '../model/Title';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  
  selectedTitle: Title;
  titles: Array<any>;

  constructor(private titlesService: TitlesServiceService) { this.titles }

  ngOnInit() {
    this.getTitles()
  }

  getTitles(){
    this.titlesService.listar().subscribe(titles => this.titles = titles)
  }

  onSelect(title: Title){
    this.selectedTitle = title;
  }

}
