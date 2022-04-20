import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstyear1Component } from './firstyear1.component';

describe('Firstyear1Component', () => {
  let component: Firstyear1Component;
  let fixture: ComponentFixture<Firstyear1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Firstyear1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Firstyear1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
