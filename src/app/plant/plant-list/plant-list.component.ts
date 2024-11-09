import { Component, Input, OnInit } from '@angular/core';
import { PlantService } from '../../service/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  @Input() plants: any[] = []; // Utilizamos `any` si no hay interfaz definida.
  selectedPlant: any = null; // Para almacenar la planta seleccionada para editar

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

  editPlant(plant: any): void {
    this.selectedPlant = { ...plant }; // Crear una copia de la planta seleccionada para editar
  }

  updatePlant(): void {
    if (this.selectedPlant) {
      this.plantService.updatePlant(this.selectedPlant.id, this.selectedPlant).subscribe(
        () => {
          console.log(`Planta con ID ${this.selectedPlant.id} actualizada.`);
          this.fetchPlants(); // Recargar la lista de plantas después de la actualización
          this.selectedPlant = null; // Cerrar el formulario de edición
        },
        (error) => {
          console.error('Error al actualizar la planta:', error);
        }
      );
    }
  }
}