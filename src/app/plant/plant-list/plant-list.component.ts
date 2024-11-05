import { Component, Input, OnInit } from '@angular/core';
import { PlantService } from '../../service/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  @Input() plants: any[] = []; // Utilizamos `any` si no hay interfaz definida.

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.fetchPlants();
  }

  fetchPlants(): void {
    this.plantService.getAllPlants().subscribe(
      (data) => {
        this.plants = data;
      },
      (error) => {
        console.error('Error al cargar plantas:', error);
      }
    );
  }

  deletePlant(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta planta?')) {
      this.plantService.deletePlant(id.toString()).subscribe(
        () => {
          console.log(`Planta con ID ${id} eliminada.`);
          this.fetchPlants(); // Recargar la lista de plantas
        },
        (error) => {
          console.error('Error al eliminar la planta:', error);
        }
      );
    }
  }
}
