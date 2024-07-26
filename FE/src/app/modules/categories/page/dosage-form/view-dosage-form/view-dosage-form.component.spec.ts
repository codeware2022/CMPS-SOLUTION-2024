import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDosageFormComponent } from './view-dosage-form.component';

describe('ViewDosageFormComponent', () => {
  let component: ViewDosageFormComponent;
  let fixture: ComponentFixture<ViewDosageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDosageFormComponent]
    });
    fixture = TestBed.createComponent(ViewDosageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
