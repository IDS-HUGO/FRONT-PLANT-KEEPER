import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { PlantService } from './service/plant.service'; // Asegúrate de importar el servicio
import { Router } from '@angular/router';
import { Plant } from './plant/interface/plant.interface'; // Importa la interfaz Plant

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  showingLogin = false;
  showingRegister = false;
  isAddingPlant = false; 
  plants: Plant[] = []; // Cambia any[] a Plant[]

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private plantService: PlantService
  ) {} // Inyección del servicio

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (!this.isLoggedIn) {
      this.showingLogin = true;
    } else {
      this.fetchPlants(); // Cargar plantas si el usuario está autenticado
    }
  }

  showLogin() {
    this.showingLogin = true;
    this.showingRegister = false;
  }

  showRegister() {
    this.showingRegister = true;
    this.showingLogin = false;
  }

  onLoginSuccess() {
    this.isLoggedIn = true;
    this.router.navigate(['/plants']);
    this.fetchPlants(); // Carga plantas después de iniciar sesión
  }

  onRegisterSuccess() {
    this.showLogin();
  }

  onLogout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  showAddPlantForm() {
    this.isAddingPlant = true;
  }

  fetchPlants() {
    this.plantService.getAllPlants().subscribe(plants => {
      this.plants = plants; // Asignar las plantas obtenidas a la propiedad
    });
  }
}
