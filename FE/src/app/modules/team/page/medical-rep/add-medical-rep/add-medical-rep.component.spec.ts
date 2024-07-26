import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalRepComponent } from './add-medical-rep.component';

describe('AddMedicalRepComponent', () => {
  let component: AddMedicalRepComponent;
  let fixture: ComponentFixture<AddMedicalRepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMedicalRepComponent]
    });
    fixture = TestBed.createComponent(AddMedicalRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
