import { Component, OnInit, Input } from '@angular/core';
import {Starring} from '../starring-list/Starring'

@Component({
  selector: 'app-starring-detail',
  templateUrl: './starring-detail.component.html',
  styleUrls: ['./starring-detail.component.css']
})
export class StarringDetailComponent implements OnInit {
  @Input() starring: Starring;
  constructor() { }

  ngOnInit() {
  }

}
