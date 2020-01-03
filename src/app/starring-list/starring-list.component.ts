import { StarringService } from './starring.service'
import { Component, OnInit } from '@angular/core';
import { Starring } from '../model/Starring';

@Component({
  selector: 'app-starring-list',
  templateUrl: './starring-list.component.html',
  styleUrls: ['./starring-list.component.css']
})
export class StarringListComponent implements OnInit {

  selectedStarring: Starring;
  starrings: Array<any>;

  constructor(private starringService: StarringService) { this.starrings }

  ngOnInit() {
    this.getStarrings();
  }

  getStarrings(){
    this.starringService.listar().subscribe(starrings => this.starrings = starrings);
  }

  onSelect(starring: Starring){
    this.selectedStarring = starring;
  }

}
