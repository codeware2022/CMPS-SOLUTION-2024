import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarketingAdminComponent } from './view-marketing-admin.component';

describe('ViewMarketingAdminComponent', () => {
  let component: ViewMarketingAdminComponent;
  let fixture: ComponentFixture<ViewMarketingAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMarketingAdminComponent]
    });
    fixture = TestBed.createComponent(ViewMarketingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
