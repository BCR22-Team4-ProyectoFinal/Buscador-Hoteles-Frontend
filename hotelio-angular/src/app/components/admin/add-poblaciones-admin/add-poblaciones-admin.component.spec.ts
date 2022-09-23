import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoblacionesAdminComponent } from './add-poblaciones-admin.component';

describe('AddPoblacionesAdminComponent', () => {
  let component: AddPoblacionesAdminComponent;
  let fixture: ComponentFixture<AddPoblacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoblacionesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoblacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
