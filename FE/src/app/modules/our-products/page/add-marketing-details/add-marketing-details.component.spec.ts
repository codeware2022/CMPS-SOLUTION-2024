import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketingDetailsComponent } from './add-marketing-details.component';

describe('AddMarketingDetailsComponent', () => {
  let component: AddMarketingDetailsComponent;
  let fixture: ComponentFixture<AddMarketingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMarketingDetailsComponent]
    });
    fixture = TestBed.createComponent(AddMarketingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
