import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComparisonComponent } from './products-comparison.component';

describe('ProductsComparisonComponent', () => {
  let component: ProductsComparisonComponent;
  let fixture: ComponentFixture<ProductsComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComparisonComponent]
    });
    fixture = TestBed.createComponent(ProductsComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
