import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private authStatus = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private http: HttpClient, private router: Router) {}

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/usuarios`, userData);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('token', response.token);
        }
        this.authStatus.next(true);
      })
    );
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
    }
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.authStatus.value;
  }

  private checkToken(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
