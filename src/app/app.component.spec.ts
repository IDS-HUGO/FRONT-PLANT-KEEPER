import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { PlantService } from './service/plant.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Mocks de los servicios
class MockAuthService {
  isLoggedIn() {
    return true;
  }
  logout() {}
}

class MockPlantService {
  getAllPlants() {
    return of([]); // Devuelve un observable vacío de plantas
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  let plantService: PlantService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: PlantService, useClass: MockPlantService },
        { provide: Router, useValue: { navigate: () => {} } }, // Mock del Router
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Ignora los errores de esquemas de elementos desconocidos
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    plantService = TestBed.inject(PlantService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the user is logged in on init', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    component.ngOnInit();
    expect(component.isLoggedIn).toBe(true);
  });

  it('should fetch plants if logged in', () => {
    spyOn(plantService, 'getAllPlants').and.callThrough();
    component.fetchPlants();
    expect(plantService.getAllPlants).toHaveBeenCalled();
  });

  it('should show login form when not logged in', () => {
    component.ngOnInit();
    expect(component.showingLogin).toBe(true);
  });
});
