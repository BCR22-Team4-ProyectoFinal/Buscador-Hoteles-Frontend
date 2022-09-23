import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorItemComponent } from './buscador-item.component';

describe('BuscadorItemComponent', () => {
  let component: BuscadorItemComponent;
  let fixture: ComponentFixture<BuscadorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
