import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusinessManagerComponent } from './view-business-manager.component';

describe('ViewBusinessManagerComponent', () => {
  let component: ViewBusinessManagerComponent;
  let fixture: ComponentFixture<ViewBusinessManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBusinessManagerComponent]
    });
    fixture = TestBed.createComponent(ViewBusinessManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
