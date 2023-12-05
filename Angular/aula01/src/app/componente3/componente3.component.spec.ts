import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3Component } from './componente3.component';

describe('Componente3Component', () => {
  let component: Componente3Component;
  let fixture: ComponentFixture<Componente3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
