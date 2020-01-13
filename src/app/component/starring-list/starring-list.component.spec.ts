import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarringListComponent } from './starring-list.component';

describe('StarringListComponent', () => {
  let component: StarringListComponent;
  let fixture: ComponentFixture<StarringListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarringListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
