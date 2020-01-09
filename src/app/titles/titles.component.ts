import { Observable, Subject } from 'rxjs';
import { StarringService } from './../service/starring.service';
import { GendersService } from './../service/genders.service';
import { Starring } from './../model/Starring';
import { TitlesServiceService } from '../service/titles-service.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '../model/Title';
import { Gender } from '../model/Gender';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  selectedTitle: Title;
  titles: Array<any>;

  constructor(private titlesService: TitlesServiceService) {}

  ngOnInit() {
    this.getTitles()
  }

  getTitles(){
    this.titlesService.listar().subscribe(titles => this.titles = titles)
  }

  onSelect(title: Title){
    this.selectedTitle = title;
  }

  newTitle(name: string, year: number, gender: Gender, starring: Starring){

  }

}
