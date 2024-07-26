import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductMasterComponent } from './view-product-master.component';

describe('ViewProductMasterComponent', () => {
  let component: ViewProductMasterComponent;
  let fixture: ComponentFixture<ViewProductMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductMasterComponent]
    });
    fixture = TestBed.createComponent(ViewProductMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
