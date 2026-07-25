import { Routes } from '@angular/router';
import { GestionMaterialesComponent } from './features/materiales/pages/gestion-materiales/gestion-materiales.component';


export const routes: Routes = [

{
 path:'',
 redirectTo:'materiales',
 pathMatch:'full'
},

{
 path:'materiales',
 component:GestionMaterialesComponent
}

];