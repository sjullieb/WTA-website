import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeParametersComponent } from './hike-parameters.component';

describe('HikeParametersComponent', () => {
  let component: HikeParametersComponent;
  let fixture: ComponentFixture<HikeParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
