import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionesAdminComponent } from './poblaciones-admin.component';

describe('PoblacionesAdminComponent', () => {
  let component: PoblacionesAdminComponent;
  let fixture: ComponentFixture<PoblacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoblacionesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoblacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
