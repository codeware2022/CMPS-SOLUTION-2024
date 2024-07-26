import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRangeComponent } from './view-range.component';

describe('ViewRangeComponent', () => {
  let component: ViewRangeComponent;
  let fixture: ComponentFixture<ViewRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRangeComponent]
    });
    fixture = TestBed.createComponent(ViewRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
