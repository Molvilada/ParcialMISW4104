/* tslint:disable:no-unused-variable */

import {
  ComponentFixture,
  TestBed,
  async,
  inject,
} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('Component: VehiculoList', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CommonModule], // importamos CommonModule
      declarations: [VehiculoListComponent],
      providers: [VehiculoService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    for (let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        i + 1,
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.datatype.number({ min: 2000, max: 2022 }),
        faker.datatype.number({ min: 0, max: 100000 }),
        faker.color.human(),
        faker.image.transport()
      );
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 table elements', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3);
  });

  it('should have table head', () => {
    expect(debug.queryAll(By.css('thead th'))).toHaveSize(4);
  });
});
