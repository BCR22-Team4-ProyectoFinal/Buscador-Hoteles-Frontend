import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreservaUserComponent } from './addreserva-user.component';

describe('AddreservaUserComponent', () => {
  let component: AddreservaUserComponent;
  let fixture: ComponentFixture<AddreservaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreservaUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreservaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
