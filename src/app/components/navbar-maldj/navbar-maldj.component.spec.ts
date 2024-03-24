import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMaldjComponent } from './navbar-maldj.component';

describe('NavbarMaldjComponent', () => {
  let component: NavbarMaldjComponent;
  let fixture: ComponentFixture<NavbarMaldjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMaldjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMaldjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
