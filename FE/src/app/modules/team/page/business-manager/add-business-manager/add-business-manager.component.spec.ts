import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessManagerComponent } from './add-business-manager.component';

describe('AddBusinessManagerComponent', () => {
  let component: AddBusinessManagerComponent;
  let fixture: ComponentFixture<AddBusinessManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBusinessManagerComponent]
    });
    fixture = TestBed.createComponent(AddBusinessManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
