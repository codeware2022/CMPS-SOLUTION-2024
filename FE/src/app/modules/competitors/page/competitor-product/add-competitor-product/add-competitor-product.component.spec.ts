import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitorProductComponent } from './add-competitor-product.component';

describe('AddCompetitorProductComponent', () => {
  let component: AddCompetitorProductComponent;
  let fixture: ComponentFixture<AddCompetitorProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompetitorProductComponent]
    });
    fixture = TestBed.createComponent(AddCompetitorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
