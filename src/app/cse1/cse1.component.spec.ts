import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse1Component } from './cse1.component';

describe('Cse1Component', () => {
  let component: Cse1Component;
  let fixture: ComponentFixture<Cse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cse1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
