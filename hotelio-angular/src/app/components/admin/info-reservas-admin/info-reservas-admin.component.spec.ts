import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReservasAdminComponent } from './info-reservas-admin.component';

describe('InfoReservasAdminComponent', () => {
  let component: InfoReservasAdminComponent;
  let fixture: ComponentFixture<InfoReservasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReservasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoReservasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
