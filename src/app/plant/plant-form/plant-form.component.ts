import { Component, EventEmitter, Output } from '@angular/core';
import { Plant } from '../interface/plant.interface';
import { PlantService } from '../../service/plant.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent {
  plant: Plant = {
    id: 0, 
    nombreComun: '',
    nombreCientifico: '',
    frecuenciaRiego: '',
    condicionesLuz: '',
    fechaRegistro: new Date() 
  };
  
  isEditing: boolean = false;

  @Output() formSubmitted = new EventEmitter<void>();

  constructor(private plantService: PlantService) {}

  onSubmit() {
    if (this.isEditing) {
      // Lógica para actualizar la planta
      // Ejemplo: this.plantService.updatePlant(this.plant.id, this.plant).subscribe(...);
    } else {
      this.plantService.createPlant(this.plant).subscribe(() => {
        this.formSubmitted.emit(); // Notificar al padre que se ha enviado el formulario
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.plant = {
      id: 0, 
      nombreComun: '',
      nombreCientifico: '',
      frecuenciaRiego: '',
      condicionesLuz: '',
      fechaRegistro: new Date()   
    };
    this.isEditing = false;
  }

  cancel() {
    this.resetForm();
  }
}
