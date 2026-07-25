import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material';
import { ApiResponse } from '../../../core/models/api-response.model';
import { MaterialRequest } from '../models/material-request';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {


  private apiUrl = 'http://localhost:8080/api/materiales';


  constructor(
    private http: HttpClient
  ) { }


  listar(): Observable<ApiResponse<Material[]>> {

    return this.http.get<ApiResponse<Material[]>>(
      this.apiUrl
    );

  }

  crear(material: MaterialRequest) {

    return this.http.post<ApiResponse<Material>>(
      this.apiUrl,
      material
    );

  }

  actualizar(id:number, material:MaterialRequest){

    return this.http.put<any>(
      `${this.apiUrl}/${id}`,
      material
    );

  }

  buscarPorTipo(tipo:string):Observable<ApiResponse<Material[]>>{

    return this.http.get<ApiResponse<Material[]>>(
        `${this.apiUrl}/tipo/${tipo}`
    );

  }

  buscarPorCiudad(ciudadId:number):Observable<ApiResponse<Material[]>>{

    return this.http.get<ApiResponse<Material[]>>(
      `${this.apiUrl}/ciudad/${ciudadId}`
    );

  }


  buscarPorFecha(fecha:string):Observable<ApiResponse<Material[]>>{

    return this.http.get<ApiResponse<Material[]>>(
      `${this.apiUrl}/fecha-compra/${fecha}`
    );

  }

}