import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrigadoFestaComponent } from './obrigado-festa.component';

describe('ObrigadoFestaComponent', () => {
  let component: ObrigadoFestaComponent;
  let fixture: ComponentFixture<ObrigadoFestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrigadoFestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrigadoFestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
