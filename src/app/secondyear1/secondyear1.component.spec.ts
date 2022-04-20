import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondyear1Component } from './secondyear1.component';

describe('Secondyear1Component', () => {
  let component: Secondyear1Component;
  let fixture: ComponentFixture<Secondyear1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondyear1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondyear1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
