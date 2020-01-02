import { StarringService } from '../starring.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starring-list',
  templateUrl: './starring-list.component.html',
  styleUrls: ['./starring-list.component.css']
})
export class StarringListComponent implements OnInit {

  starrings: Array<any>;

  constructor(private starringService: StarringService) { this.starrings }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.starringService.listar().subscribe(dados => this.starrings = dados);
  }

}
