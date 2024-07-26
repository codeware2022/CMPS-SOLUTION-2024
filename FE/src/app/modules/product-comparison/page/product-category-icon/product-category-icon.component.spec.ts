import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryIconComponent } from './product-category-icon.component';

describe('ProductCategoryIconComponent', () => {
  let component: ProductCategoryIconComponent;
  let fixture: ComponentFixture<ProductCategoryIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryIconComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
