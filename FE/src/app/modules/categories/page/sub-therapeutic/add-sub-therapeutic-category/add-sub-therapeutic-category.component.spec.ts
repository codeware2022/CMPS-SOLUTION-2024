import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubTherapeuticCategoryComponent } from './add-sub-therapeutic-category.component';

describe('AddSubTherapeuticCategoryComponent', () => {
  let component: AddSubTherapeuticCategoryComponent;
  let fixture: ComponentFixture<AddSubTherapeuticCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubTherapeuticCategoryComponent]
    });
    fixture = TestBed.createComponent(AddSubTherapeuticCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
