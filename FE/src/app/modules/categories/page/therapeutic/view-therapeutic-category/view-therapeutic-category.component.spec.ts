import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTherapeuticCategoryComponent } from './view-therapeutic-category.component';

describe('ViewTherapeuticCategoryComponent', () => {
  let component: ViewTherapeuticCategoryComponent;
  let fixture: ComponentFixture<ViewTherapeuticCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTherapeuticCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewTherapeuticCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
