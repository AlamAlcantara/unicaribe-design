import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionesUniversitariasComponent } from './soluciones-universitarias.component';

describe('SolucionesUniversitariasComponent', () => {
  let component: SolucionesUniversitariasComponent;
  let fixture: ComponentFixture<SolucionesUniversitariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolucionesUniversitariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionesUniversitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
