import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHabitacionesAdminComponent } from './info-habitaciones-admin.component';

describe('InfoHabitacionesAdminComponent', () => {
  let component: InfoHabitacionesAdminComponent;
  let fixture: ComponentFixture<InfoHabitacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoHabitacionesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHabitacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
