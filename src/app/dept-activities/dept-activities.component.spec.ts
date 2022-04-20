import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptActivitiesComponent } from './dept-activities.component';

describe('DeptActivitiesComponent', () => {
  let component: DeptActivitiesComponent;
  let fixture: ComponentFixture<DeptActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
