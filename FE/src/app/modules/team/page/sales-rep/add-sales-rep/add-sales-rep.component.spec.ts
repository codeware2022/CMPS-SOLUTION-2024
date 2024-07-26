import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesRepComponent } from './add-sales-rep.component';

describe('AddSalesRepComponent', () => {
  let component: AddSalesRepComponent;
  let fixture: ComponentFixture<AddSalesRepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalesRepComponent]
    });
    fixture = TestBed.createComponent(AddSalesRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
