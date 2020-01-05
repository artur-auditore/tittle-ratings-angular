import { StarringService } from '../service/starring.service';
import { Component, OnInit, Input } from '@angular/core';
import { Starring } from '../model/Starring'
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-starring-detail',
  templateUrl: './starring-detail.component.html',
  styleUrls: ['./starring-detail.component.css']
})
export class StarringDetailComponent implements OnInit {

  @Input() starring: Starring;
  starrings: Starring[] = []

  constructor(private router: ActivatedRoute, private route: Router,
    private starringService: StarringService,
    private location: Location) { }

  ngOnInit() {
    this.getStarring();
  }

  getStarrings(){
    this.starringService.listar().subscribe(starrings => this.starrings = starrings);
  }

  getStarring(){
    const pk = +this.router.snapshot.paramMap.get('pk');
    this.starringService.getStarring(pk).subscribe(starring => this.starring = starring)
  }

  goBack(): void {
    this.location.back();
  }

  delete(starring: Starring){
    this.starrings = this.starrings.filter(s => s!== starring);
    this.starringService.delete(starring).subscribe();
    this.route.navigate(['/starrings-dashboard'])
  }
}
