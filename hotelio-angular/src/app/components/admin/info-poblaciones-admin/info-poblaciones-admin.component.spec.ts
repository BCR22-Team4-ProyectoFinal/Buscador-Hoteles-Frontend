import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPoblacionesAdminComponent } from './info-poblaciones-admin.component';

describe('InfoPoblacionesAdminComponent', () => {
  let component: InfoPoblacionesAdminComponent;
  let fixture: ComponentFixture<InfoPoblacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPoblacionesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPoblacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
