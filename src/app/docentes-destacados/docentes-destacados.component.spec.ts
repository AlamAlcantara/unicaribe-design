import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesDestacadosComponent } from './docentes-destacados.component';

describe('DocentesDestacadosComponent', () => {
  let component: DocentesDestacadosComponent;
  let fixture: ComponentFixture<DocentesDestacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesDestacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
