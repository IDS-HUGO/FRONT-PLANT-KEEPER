import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() registerSuccess = new EventEmitter<void>();
  userData = { nombre: '', apellidoPaterno: '', correoElectronico: '', usuario: '', contrasena: '' };

  constructor(private authService: AuthService) {}

  register() {
    if (!this.userData.nombre || !this.userData.apellidoPaterno || !this.userData.correoElectronico || !this.userData.usuario || !this.userData.contrasena) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    
    this.authService.register(this.userData).subscribe(
      () => {
        this.registerSuccess.emit(); // Emitir evento de éxito
      },
      error => {
        console.error(error); // Verificar el error en la consola
        alert('Error en el registro');
      }
    );
  }
  
}
