import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardClienteComponent } from './navbard-cliente.component';

describe('NavbardClienteComponent', () => {
  let component: NavbardClienteComponent;
  let fixture: ComponentFixture<NavbardClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
