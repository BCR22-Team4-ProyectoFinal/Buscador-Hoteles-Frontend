import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHotelesComponent } from './info-hoteles.component';

describe('InfoHotelesComponent', () => {
  let component: InfoHotelesComponent;
  let fixture: ComponentFixture<InfoHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoHotelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
