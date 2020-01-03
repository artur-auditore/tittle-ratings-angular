import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarringsDashboardComponent } from './starrings-dashboard.component';

describe('StarringsDashboardComponent', () => {
  let component: StarringsDashboardComponent;
  let fixture: ComponentFixture<StarringsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarringsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarringsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
