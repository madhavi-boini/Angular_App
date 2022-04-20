import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstyearComponent } from './firstyear.component';

describe('FirstyearComponent', () => {
  let component: FirstyearComponent;
  let fixture: ComponentFixture<FirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
