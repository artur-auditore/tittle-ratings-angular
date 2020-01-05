import { Component, OnInit } from '@angular/core';
import { Starring } from '../model/Starring'
import { StarringService } from '../service/starring.service'

@Component({
  selector: 'app-starrings-dashboard',
  templateUrl: './starrings-dashboard.component.html',
  styleUrls: ['./starrings-dashboard.component.css']
})
export class StarringsDashboardComponent implements OnInit {

  starrings: Starring[] = []

  constructor(private starringService: StarringService) { }

  ngOnInit() {
    this.getStarrings()
  }

  getStarrings(){
    this.starringService.listar().subscribe(starrings => this.starrings = starrings);
  }

  add(name: String, age: number, nationality: String){
    let starring = new Starring()
    starring.name = name;
    starring.age = age;
    starring.nationality = nationality;
    this.starringService.newStarring(starring)
    .subscribe(starring =>
      this.starrings.push(starring)
    );
  }

}
