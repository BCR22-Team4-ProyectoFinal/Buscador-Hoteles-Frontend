import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabitacionesAdminComponent } from './add-habitaciones-admin.component';

describe('AddHabitacionesAdminComponent', () => {
  let component: AddHabitacionesAdminComponent;
  let fixture: ComponentFixture<AddHabitacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHabitacionesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHabitacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
