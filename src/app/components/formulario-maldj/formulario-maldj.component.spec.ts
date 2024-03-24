import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMaldjComponent } from './formulario-maldj.component';

describe('FormularioMaldjComponent', () => {
  let component: FormularioMaldjComponent;
  let fixture: ComponentFixture<FormularioMaldjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMaldjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMaldjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
