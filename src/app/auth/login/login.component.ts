import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();
  credentials = { usuario: '', contrasena: '' };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      () => {
        this.loginSuccess.emit(); // Emitir evento de éxito
      },
      error => {
        alert('Usuario o contraseña incorrectos');
      }
    );
  }
}
