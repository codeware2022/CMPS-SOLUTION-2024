import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorProductsComponent } from './competitor-products.component';

describe('CompetitorProductsComponent', () => {
  let component: CompetitorProductsComponent;
  let fixture: ComponentFixture<CompetitorProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitorProductsComponent]
    });
    fixture = TestBed.createComponent(CompetitorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
