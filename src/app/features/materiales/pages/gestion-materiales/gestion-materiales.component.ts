import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material';
import { FormularioMaterialComponent } from '../../components/formulario-material/formulario-material.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector:'app-gestion-materiales',
  standalone:true,
  imports:[
    CommonModule, FormularioMaterialComponent, FormsModule
  ],
  templateUrl:'./gestion-materiales.component.html',
  styleUrl:'./gestion-materiales.component.css'
})
export class GestionMaterialesComponent implements OnInit {


  materiales:Material[]=[];
  
  mostrarTabla:boolean=false;

  mostrarModal = false;

  materialEditar?: Material;

  criterioBusqueda:string = '';

  tipoBusqueda:string = '';

  ciudadBusqueda:number | null = null;

  fechaCompraBusqueda:string = '';

  constructor(
    private materialService:MaterialService
  ){}

  buscar(){

    this.limpiarResultados();

    if(!this.criterioBusqueda){

      this.materiales = [];
      this.mostrarTabla = false;

      return;

    }


    switch(this.criterioBusqueda){


      case 'TODOS':

        this.listarTodos();

      break;


      case 'TIPO':

        this.buscarPorTipo();

      break;


      case 'CIUDAD':

        this.buscarPorCiudad();

      break;


      case 'FECHA':

        this.buscarPorFecha();

      break;


    }


  }
listarTodos(){

  this.limpiarResultados();

  this.materialService.listar()
  .subscribe({

    next:(response)=>{

      this.materiales=response.data;

      this.mostrarTabla=true;

    },

    error:(error)=>{

      console.error(error);

    }

  });


}

buscarPorTipo(){

  this.limpiarResultados();

  this.materialService.buscarPorTipo(this.tipoBusqueda)
  .subscribe({

    next:(response)=>{

      this.materiales=response.data;

      this.mostrarTabla=true;

    },

    error:(error)=>{

      console.error(error);

    }

  });


}

buscarPorCiudad(){

  this.limpiarResultados();

  this.materialService.buscarPorCiudad(this.ciudadBusqueda!)
  .subscribe({

    next:(response)=>{

      this.materiales=response.data;

      this.mostrarTabla=true;

    },

    error:(error)=>{

      console.error(error);

    }

  });


}

buscarPorFecha(){

  this.limpiarResultados();

  this.materialService.buscarPorFecha(this.fechaCompraBusqueda)
  .subscribe({

    next:(response)=>{

      this.materiales=response.data;

      this.mostrarTabla=true;

    },

    error:(error)=>{

      console.error(error);

    }

  });


}

limpiar(){

  this.materiales = [];

  this.mostrarTabla = false;

}

editar(material: Material){

    this.materialEditar = material;

    this.mostrarModal = true;

}

abrirModal(){

    this.materialEditar = undefined;

    this.mostrarModal = true;

}

cerrarModal(actualizarTabla:boolean = false){

  this.mostrarModal = false;


  if(actualizarTabla){

    this.buscar();

  }

}

  limpiarResultados(){

    this.materiales = [];
    this.mostrarTabla = false;

  }



  ngOnInit():void{
  }

  cerrarSesion(){

    localStorage.removeItem('token');

    window.location.href = '/login';

  }

}