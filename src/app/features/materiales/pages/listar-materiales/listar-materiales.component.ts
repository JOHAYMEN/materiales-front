import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-materiales',
  standalone:true,
  imports:[
    CommonModule
  ],
  templateUrl:'./listar-materiales.component.html',
  styleUrl:'./listar-materiales.component.css'
})
export class ListarMaterialesComponent implements OnInit {


  materiales:Material[]=[];


  constructor(
    private materialService:MaterialService
  ){}



  ngOnInit(): void {

    this.cargarMateriales();

  }

  cargarMateriales(){

    this.materialService.listar()
    .subscribe({

      next:(response)=>{

        console.log(response);

      this.materiales = response.data;

      },

      error:(err)=>{

        console.error(err);

      }

    });

  }


}