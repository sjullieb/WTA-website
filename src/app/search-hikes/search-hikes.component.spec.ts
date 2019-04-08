import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHikesComponent } from './search-hikes.component';

describe('SearchHikesComponent', () => {
  let component: SearchHikesComponent;
  let fixture: ComponentFixture<SearchHikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
