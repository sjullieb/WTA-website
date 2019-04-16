import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingGuideComponent } from './hiking-guide.component';

describe('HikingGuideComponent', () => {
  let component: HikingGuideComponent;
  let fixture: ComponentFixture<HikingGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikingGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
