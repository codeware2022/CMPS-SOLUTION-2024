import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasurementUnitsComponent } from './add-measurement-units.component';

describe('AddMeasurementUnitsComponent', () => {
  let component: AddMeasurementUnitsComponent;
  let fixture: ComponentFixture<AddMeasurementUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMeasurementUnitsComponent]
    });
    fixture = TestBed.createComponent(AddMeasurementUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
