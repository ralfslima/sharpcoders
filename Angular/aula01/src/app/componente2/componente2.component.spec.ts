import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2Component } from './componente2.component';

describe('Componente2Component', () => {
  let component: Componente2Component;
  let fixture: ComponentFixture<Componente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
