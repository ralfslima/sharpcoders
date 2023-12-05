import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pg3Component } from './pg3.component';

describe('Pg3Component', () => {
  let component: Pg3Component;
  let fixture: ComponentFixture<Pg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pg3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
