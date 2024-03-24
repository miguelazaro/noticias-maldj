import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerMaldjComponent } from './spinner-maldj.component';

describe('SpinnerMaldjComponent', () => {
  let component: SpinnerMaldjComponent;
  let fixture: ComponentFixture<SpinnerMaldjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerMaldjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerMaldjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
