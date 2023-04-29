/* tslint:disable:no-unused-variable */

import {
  ComponentFixture,
  TestBed,
  async,
  inject,
} from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';

describe('Component: Vehiculo', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CommonModule],
      declarations: [VehiculoComponent, VehiculoListComponent],
      providers: [VehiculoService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(debug.nativeElement.querySelector('h1').textContent).toContain(
      'TuSegundazo.com'
    );
  });
});
