import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDosageFormComponent } from './add-dosage-form.component';

describe('AddDosageFormComponent', () => {
  let component: AddDosageFormComponent;
  let fixture: ComponentFixture<AddDosageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDosageFormComponent]
    });
    fixture = TestBed.createComponent(AddDosageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
