import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraComponent } from './primeira.component';

describe('PrimeiraComponent', () => {
  let component: PrimeiraComponent;
  let fixture: ComponentFixture<PrimeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
