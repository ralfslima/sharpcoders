import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pg404Component } from './pg404.component';

describe('Pg404Component', () => {
  let component: Pg404Component;
  let fixture: ComponentFixture<Pg404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pg404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pg404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
