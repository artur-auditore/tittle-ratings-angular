import { StarringService } from './../service/starring.service';
import { GendersService } from './../service/genders.service';
import { Starring } from './../model/Starring';
import { TitlesServiceService } from '../service/titles-service.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '../model/Title';
import { Gender } from '../model/Gender';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  starrings: Array<any>;
  genders: Array<Gender>;
  selectedTitle: Title;
  selectedGender: Gender;
  selectedStarring: Starring;
  titles: Array<any>;

  constructor(private titlesService: TitlesServiceService,
    private genderService: GendersService,
    private starringService: StarringService) {}

  ngOnInit() {
    this.getTitles();
    this.getStarrings();
    this.getGenders();

  }

  getGenders(){
    this.genderService.listar().subscribe(data => this.genders = data);
  }

  getStarrings(){
    this.starringService.listar().subscribe(data => this.starrings = data);
  }

  getTitles(){
    this.titlesService.listar().subscribe(titles => this.titles = titles)
  }

  onSelect(title: Title){
    this.selectedTitle = title;
  }

  newTitle(name: string, year: number, gender: Gender, starring: Starring){
    let title = new Title();
    title.name = name;
    title.year = year;
    title.gender;
  }

}
