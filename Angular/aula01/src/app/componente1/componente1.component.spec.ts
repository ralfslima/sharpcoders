import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1Component } from './componente1.component';

describe('Componente1Component', () => {
  let component: Componente1Component;
  let fixture: ComponentFixture<Componente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
