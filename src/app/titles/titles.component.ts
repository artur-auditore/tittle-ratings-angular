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

  starrings: Array<Starring>;
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

  findGender(gender: string): Gender{
    for (let g of this.genders){
      if (g.name == gender){
        return g;
      } 
    } 
  }

  findStarring(starring: string): Starring{
    for (let s of this.starrings){
      if (s.name == starring){
        return s;
      }
    }
  }

  newTitle(name: string, year: number, gender: string, starring: string){
    let title = new Title();
    title.name = name;
    title.year = year;
    title.gender = JSON.stringify(this.findGender(gender))
    title.starring = JSON.stringify(this.findStarring(starring))
    this.titlesService.newTitle(title)
    .subscribe(title =>
      this.titles.push(title));
    }

}
