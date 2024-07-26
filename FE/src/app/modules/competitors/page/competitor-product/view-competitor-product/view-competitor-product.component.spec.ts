import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompetitorProductComponent } from './view-competitor-product.component';

describe('ViewCompetitorProductComponent', () => {
  let component: ViewCompetitorProductComponent;
  let fixture: ComponentFixture<ViewCompetitorProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCompetitorProductComponent]
    });
    fixture = TestBed.createComponent(ViewCompetitorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
