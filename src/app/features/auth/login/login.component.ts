import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/login-request.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginData: LoginRequest = {
    username:'',
    password:''
  };


  constructor(
    private authService: AuthService
  ){}



  login(){

    this.authService.login(this.loginData)
      .subscribe({

        next:(response)=>{

          console.log('Login exitoso', response);

        },

        error:(error)=>{

          console.error('Error en login', error);

        }

      });

  }

}