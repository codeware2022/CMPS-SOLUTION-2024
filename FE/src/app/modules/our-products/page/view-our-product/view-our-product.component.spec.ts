import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOurProductComponent } from './view-our-product.component';

describe('ViewOurProductComponent', () => {
  let component: ViewOurProductComponent;
  let fixture: ComponentFixture<ViewOurProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOurProductComponent]
    });
    fixture = TestBed.createComponent(ViewOurProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
