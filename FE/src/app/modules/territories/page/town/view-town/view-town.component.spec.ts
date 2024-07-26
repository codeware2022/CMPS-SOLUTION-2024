import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTownComponent } from './view-town.component';

describe('ViewTownComponent', () => {
  let component: ViewTownComponent;
  let fixture: ComponentFixture<ViewTownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTownComponent]
    });
    fixture = TestBed.createComponent(ViewTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
