import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondyearComponent } from './secondyear.component';

describe('SecondyearComponent', () => {
  let component: SecondyearComponent;
  let fixture: ComponentFixture<SecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
