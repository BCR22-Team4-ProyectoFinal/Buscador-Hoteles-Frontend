import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhotelesAdminComponent } from './addhoteles-admin.component';

describe('AddhotelesAdminComponent', () => {
  let component: AddhotelesAdminComponent;
  let fixture: ComponentFixture<AddhotelesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhotelesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhotelesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
