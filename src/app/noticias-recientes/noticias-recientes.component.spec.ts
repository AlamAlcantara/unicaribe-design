import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasRecientesComponent } from './noticias-recientes.component';

describe('NoticiasRecientesComponent', () => {
  let component: NoticiasRecientesComponent;
  let fixture: ComponentFixture<NoticiasRecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasRecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
