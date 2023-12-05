import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4Component } from './componente4.component';

describe('Componente4Component', () => {
  let component: Componente4Component;
  let fixture: ComponentFixture<Componente4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
