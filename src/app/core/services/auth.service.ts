import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../features/auth/models/login-request.model';


@Injectable({
  providedIn:'root'
})
export class AuthService {


private apiUrl = 'http://localhost:8080/api/auth';


constructor(
    private http:HttpClient
){}



login(request:LoginRequest){

    return this.http.post<any>(
        `${this.apiUrl}/login`,
        request
    );

}



guardarToken(token:string){

    localStorage.setItem(
        'token',
        token
    );

}



obtenerToken(){

    return localStorage.getItem('token');

}



cerrarSesion(){

    localStorage.removeItem('token');

}


}