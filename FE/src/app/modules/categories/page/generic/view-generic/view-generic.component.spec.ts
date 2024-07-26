import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGenericComponent } from './view-generic.component';

describe('ViewGenericComponent', () => {
  let component: ViewGenericComponent;
  let fixture: ComponentFixture<ViewGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewGenericComponent]
    });
    fixture = TestBed.createComponent(ViewGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
