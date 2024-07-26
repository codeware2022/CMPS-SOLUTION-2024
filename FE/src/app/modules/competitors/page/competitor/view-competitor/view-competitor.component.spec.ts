import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompetitorComponent } from './view-competitor.component';

describe('ViewCompetitorComponent', () => {
  let component: ViewCompetitorComponent;
  let fixture: ComponentFixture<ViewCompetitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCompetitorComponent]
    });
    fixture = TestBed.createComponent(ViewCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
