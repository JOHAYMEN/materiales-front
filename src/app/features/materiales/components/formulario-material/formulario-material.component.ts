import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialService } from '../../services/material.service';
import { MaterialRequest } from '../../models/material-request';
import Swal from 'sweetalert2';
import { Material } from '../../models/material';

@Component({
  selector: 'app-formulario-material',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-material.component.html',
  styleUrl: './formulario-material.component.css'
})
export class FormularioMaterialComponent implements OnChanges {


  @Input()
  materialEditar?: Material;


  
  @Output()
  cerrar = new EventEmitter<boolean>();


  constructor(
    private materialService: MaterialService
  ) {}


  ciudades = [
      {
        id:1,
        nombre:'Medellín'
      },

      {
        id:2,
        nombre:'Cartagena'
      },

      {
        id:3,
        nombre:'Bogotá'
      },

      {
        id:4,
        nombre:'Cali'
      },

      {
        id:5,
        nombre:'Arjona'
      },

      {
        id:6,
        nombre:'Turbaco'
      },

      {
        id:7,
        nombre:'Sabaneta'
      }

  ];


  material: MaterialRequest = {

    nombre: '',

    descripcion: '',

    tipo: '',

    precio: 0,

    fechaCompra: '',

    fechaVenta: null,

    estado: 'ACTIVO',

    ciudadId: 1

  };


  guardar() {

    console.log(this.material);


    if(this.materialEditar){

      this.actualizar();

    }else{

      this.crear();

    }

  }


  crear(){


    this.materialService.crear(this.material)
    .subscribe({

      next:(response)=>{


        Swal.fire({

          icon:'success',

          title:'Material creado',

          text:'El material se registró correctamente.',

          confirmButtonColor:'#2563eb'

        });


        this.cerrar.emit(true);


      },


      error:(error:any)=>{


        console.log(error);


        Swal.fire({

          icon:'error',

          title:'Error',

          text:error.error.message,

          target:document.body,

          confirmButtonColor:'#dc2626'

        });


      }


    });


  }



  actualizar(){
    if(!this.materialEditar?.id){

      Swal.fire({

        icon:'error',

        title:'Error',

        text:'No se encontró el identificador del material.'

      });

      return;

    }


    this.materialService.actualizar(
      this.materialEditar!.id,
      this.material
    )
    .subscribe({

      next:(response)=>{


        Swal.fire({

          icon:'success',

          title:'Material actualizado',

          text:'El material se actualizó correctamente.',

          confirmButtonColor:'#2563eb'

        });


        this.cerrar.emit(true);


      },


      error:(error:any)=>{


        console.log(error);


        Swal.fire({

          icon:'error',

          title:'Error',

          text:error.error.message,

          target:document.body,

          confirmButtonColor:'#dc2626'

        });


      }


    });


  }




  ngOnChanges(changes: SimpleChanges): void {


    if (changes['materialEditar'] && this.materialEditar) {


      this.material = {


        nombre: this.materialEditar.nombre,


        descripcion: this.materialEditar.descripcion,


        tipo: this.materialEditar.tipo,


        precio: this.materialEditar.precio,


        fechaCompra: this.materialEditar.fechaCompra,


        fechaVenta: this.materialEditar.fechaVenta,


        estado: this.materialEditar.estado,


        ciudadId: this.obtenerCiudadId(this.materialEditar.ciudad)


      };


    }


  }



  obtenerCiudadId(nombreCiudad:string):number{


    const ciudad = this.ciudades.find(

      c => c.nombre === nombreCiudad

    );


    return ciudad ? ciudad.id : 1;


  }



  cerrarModal(){

    this.cerrar.emit();

  }


}