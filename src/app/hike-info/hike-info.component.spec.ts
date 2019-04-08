import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeInfoComponent } from './hike-info.component';

describe('HikeInfoComponent', () => {
  let component: HikeInfoComponent;
  let fixture: ComponentFixture<HikeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
