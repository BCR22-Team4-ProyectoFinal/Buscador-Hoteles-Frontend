import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesAdminComponent } from './hoteles-admin.component';

describe('HotelesAdminComponent', () => {
  let component: HotelesAdminComponent;
  let fixture: ComponentFixture<HotelesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
