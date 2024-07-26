import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalRepComponent } from './view-medical-rep.component';

describe('ViewMedicalRepComponent', () => {
  let component: ViewMedicalRepComponent;
  let fixture: ComponentFixture<ViewMedicalRepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMedicalRepComponent]
    });
    fixture = TestBed.createComponent(ViewMedicalRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
