import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component'; 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlantFormComponent,
    PlantDetailComponent,
    PlantListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    PlantFormComponent,
    PlantDetailComponent,
    PlantListComponent
  ]
})
export class PlantModule { }
