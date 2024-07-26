import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTownComponent } from './area-town.component';

describe('AreaTownComponent', () => {
  let component: AreaTownComponent;
  let fixture: ComponentFixture<AreaTownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaTownComponent]
    });
    fixture = TestBed.createComponent(AreaTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
