import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTherapeuticCategoryComponent } from './add-therapeutic-category.component';

describe('AddTherapeuticCategoryComponent', () => {
  let component: AddTherapeuticCategoryComponent;
  let fixture: ComponentFixture<AddTherapeuticCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTherapeuticCategoryComponent]
    });
    fixture = TestBed.createComponent(AddTherapeuticCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
