import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarringDetailComponent } from './starring-detail.component';

describe('StarringDetailComponent', () => {
  let component: StarringDetailComponent;
  let fixture: ComponentFixture<StarringDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarringDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
