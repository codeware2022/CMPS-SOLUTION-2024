import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOurProductComponent } from './add-our-product.component';

describe('AddOurProductComponent', () => {
  let component: AddOurProductComponent;
  let fixture: ComponentFixture<AddOurProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOurProductComponent]
    });
    fixture = TestBed.createComponent(AddOurProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
