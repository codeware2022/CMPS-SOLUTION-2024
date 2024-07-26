import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubTherapeuticCategoryComponent } from './view-sub-therapeutic-category.component';

describe('ViewSubTherapeuticCategoryComponent', () => {
  let component: ViewSubTherapeuticCategoryComponent;
  let fixture: ComponentFixture<ViewSubTherapeuticCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSubTherapeuticCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewSubTherapeuticCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
