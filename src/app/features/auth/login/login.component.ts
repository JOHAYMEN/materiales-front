import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/login-request.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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
    private authService: AuthService,
    private router: Router
  ){}



  login(){

   this.authService.login(this.loginData)
    .subscribe({

    next:(response)=>{

    localStorage.setItem(
      'token',
      response.token
    );

    console.log('Token guardado');

    Swal.fire({

      icon:'success',

      title:'Bienvenido',

      text:'Inicio de sesión exitoso.',

      timer:1500,

      showConfirmButton:false

    });

    this.router.navigate(['/materiales']);

  },

  error:()=>{


    Swal.fire({

      icon:'error',

      title:'Error de autenticación',

      text:'Usuario o contraseña incorrectos.',

      confirmButtonColor:'#dc2626'

    });


  }

  });
  }
}