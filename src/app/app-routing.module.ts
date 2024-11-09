import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { PlantDetailComponent } from './plant/plant-detail/plant-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/detail/:id', component: PlantDetailComponent }, // Ruta para los detalles de la planta
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirección por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
