import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedComponent } from './focused.component';

describe('FocusedComponent', () => {
  let component: FocusedComponent;
  let fixture: ComponentFixture<FocusedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusedComponent]
    });
    fixture = TestBed.createComponent(FocusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
