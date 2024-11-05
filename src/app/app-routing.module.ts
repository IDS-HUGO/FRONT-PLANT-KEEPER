import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { PlantFormComponent } from './plant/plant-form/plant-form.component';
import { PlantDetailComponent } from './plant/plant-detail/plant-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Asegúrate de que esto esté presente
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/add', component: PlantFormComponent },
  { path: 'plants/edit/:id', component: PlantFormComponent },
  { path: 'plants/detail/:id', component: PlantDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
