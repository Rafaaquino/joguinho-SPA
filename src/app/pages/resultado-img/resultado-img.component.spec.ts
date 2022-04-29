import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoImgComponent } from './resultado-img.component';

describe('ResultadoImgComponent', () => {
  let component: ResultadoImgComponent;
  let fixture: ComponentFixture<ResultadoImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
