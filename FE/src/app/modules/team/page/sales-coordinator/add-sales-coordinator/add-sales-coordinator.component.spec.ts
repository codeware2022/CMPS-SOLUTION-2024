import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesCoordinatorComponent } from './add-sales-coordinator.component';

describe('AddSalesCoordinatorComponent', () => {
  let component: AddSalesCoordinatorComponent;
  let fixture: ComponentFixture<AddSalesCoordinatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalesCoordinatorComponent]
    });
    fixture = TestBed.createComponent(AddSalesCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
