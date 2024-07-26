import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesCoordinatorComponent } from './view-sales-coordinator.component';

describe('ViewSalesCoordinatorComponent', () => {
  let component: ViewSalesCoordinatorComponent;
  let fixture: ComponentFixture<ViewSalesCoordinatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSalesCoordinatorComponent]
    });
    fixture = TestBed.createComponent(ViewSalesCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
