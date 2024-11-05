import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../plant/interface/plant.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = 'http://localhost:3000/plants';

  constructor(private http: HttpClient) {}

  getAllPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }

  getPlant(id: string): Observable<Plant> {
    return this.http.get<Plant>(`${this.apiUrl}/${id}`);
  }

  createPlant(data: Plant): Observable<Plant> {
    return this.http.post<Plant>(this.apiUrl, data);
  }

  updatePlant(id: string, data: Plant): Observable<Plant> {
    return this.http.put<Plant>(`${this.apiUrl}/${id}`, data);
  }

  deletePlant(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
