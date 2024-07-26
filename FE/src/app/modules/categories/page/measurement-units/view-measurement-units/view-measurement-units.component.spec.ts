import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeasurementUnitsComponent } from './view-measurement-units.component';

describe('ViewMeasurementUnitsComponent', () => {
  let component: ViewMeasurementUnitsComponent;
  let fixture: ComponentFixture<ViewMeasurementUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMeasurementUnitsComponent]
    });
    fixture = TestBed.createComponent(ViewMeasurementUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
