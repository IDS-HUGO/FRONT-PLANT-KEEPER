import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlantListComponent,
    PlantFormComponent,
    PlantDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PlantListComponent,
    PlantFormComponent,
    PlantDetailComponent
  ]
})
export class PlantModule { }
