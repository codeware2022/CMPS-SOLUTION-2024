import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandCoordinatorComponent } from './add-brand-coordinator.component';

describe('AddBrandCoordinatorComponent', () => {
  let component: AddBrandCoordinatorComponent;
  let fixture: ComponentFixture<AddBrandCoordinatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBrandCoordinatorComponent]
    });
    fixture = TestBed.createComponent(AddBrandCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
