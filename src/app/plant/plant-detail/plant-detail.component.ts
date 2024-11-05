import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../../service/plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  plant: any;

  constructor(private route: ActivatedRoute, private plantService: PlantService) {}

  ngOnInit() {
    // Obtener el ID de la planta de los parámetros de la ruta
    const id = this.route.snapshot.paramMap.get('id');

    // Verificar que id no sea null antes de hacer la llamada al servicio
    if (id) {
      this.plantService.getPlant(id).subscribe(
        (data: any) => {
          this.plant = data;
        },
        error => {
          console.error('Error al obtener los detalles de la planta', error);
        }
      );
    } else {
      console.error('No se proporcionó un ID de planta válido.');
    }
  }
}
