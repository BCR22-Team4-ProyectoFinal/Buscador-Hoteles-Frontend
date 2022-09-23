import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorMapaComponent } from './buscador-mapa.component';

describe('BuscadorMapaComponent', () => {
  let component: BuscadorMapaComponent;
  let fixture: ComponentFixture<BuscadorMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
