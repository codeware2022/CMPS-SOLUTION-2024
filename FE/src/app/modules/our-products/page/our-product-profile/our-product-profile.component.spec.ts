import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductProfileComponent } from './our-product-profile.component';

describe('OurProductProfileComponent', () => {
  let component: OurProductProfileComponent;
  let fixture: ComponentFixture<OurProductProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurProductProfileComponent]
    });
    fixture = TestBed.createComponent(OurProductProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
