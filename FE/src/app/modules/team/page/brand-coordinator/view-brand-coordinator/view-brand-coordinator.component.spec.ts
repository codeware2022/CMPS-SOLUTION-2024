import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBrandCoordinatorComponent } from './view-brand-coordinator.component';

describe('ViewBrandCoordinatorComponent', () => {
  let component: ViewBrandCoordinatorComponent;
  let fixture: ComponentFixture<ViewBrandCoordinatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBrandCoordinatorComponent]
    });
    fixture = TestBed.createComponent(ViewBrandCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
