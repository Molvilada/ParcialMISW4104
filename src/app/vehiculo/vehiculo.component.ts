import { Component, OnInit } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  renault: number = 0;
  chevrolet: number = 0;
  nissan: number = 0;

  constructor(private vehiculoService: VehiculoService) {}

  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.contabilizarVehiculos();
    });
  }

  contabilizarVehiculos() {
    this.vehiculos.forEach((vehiculo) => {
      if (vehiculo.marca == 'Renault') {
        this.renault += 1;
      } else if (vehiculo.marca == 'Chevrolet') {
        this.chevrolet += 1;
      } else if (vehiculo.marca == 'Nissan') {
        this.nissan += 1;
      }
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }
}
