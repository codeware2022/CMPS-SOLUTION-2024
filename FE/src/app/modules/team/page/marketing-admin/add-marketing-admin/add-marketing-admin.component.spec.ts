import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketingAdminComponent } from './add-marketing-admin.component';

describe('AddMarketingAdminComponent', () => {
  let component: AddMarketingAdminComponent;
  let fixture: ComponentFixture<AddMarketingAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMarketingAdminComponent]
    });
    fixture = TestBed.createComponent(AddMarketingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
