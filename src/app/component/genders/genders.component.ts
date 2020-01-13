import { GendersService } from '../../service/genders.service';
import { Component, OnInit } from '@angular/core';
import { Gender } from '../../model/Gender';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.css']
})
export class GendersComponent implements OnInit {

  genders: Gender[] = [];

  constructor(private genderService: GendersService) { }

  ngOnInit() {
    this.getGenders();
  }

  getGenders(){
    this.genderService.listar().subscribe(genders => this.genders = genders);
  }

  newGender(name: String){
    let gender = new Gender();
    gender.name = name;
    this.genderService.newGender(gender).subscribe(gender => this.genders.push(gender))
  }

}
