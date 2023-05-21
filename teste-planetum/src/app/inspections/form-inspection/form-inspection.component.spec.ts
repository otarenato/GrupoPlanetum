import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionComponent } from './form-inspection.component';

describe('FormInspectionComponent', () => {
  let component: FormInspectionComponent;
  let fixture: ComponentFixture<FormInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
