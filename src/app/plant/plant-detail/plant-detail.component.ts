import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../../service/plant.service';
import { Plant } from '../interface/plant.interface';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  plant: Plant | null = null;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit(): void {
    const plantId = this.route.snapshot.paramMap.get('id');  
    console.log('ID de la planta:', plantId);  
    if (plantId) {
      this.plantService.getPlant(plantId).subscribe(
        (data: Plant) => {
          this.plant = data;  
        },
        (error) => {
          console.error('Error al cargar los detalles de la planta:', error);
        }
      );
    }
  }
}
