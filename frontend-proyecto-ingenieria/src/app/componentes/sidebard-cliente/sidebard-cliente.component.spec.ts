import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardClienteComponent } from './sidebard-cliente.component';

describe('SidebardClienteComponent', () => {
  let component: SidebardClienteComponent;
  let fixture: ComponentFixture<SidebardClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebardClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
