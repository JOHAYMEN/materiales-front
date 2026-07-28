import { Routes } from '@angular/router';
import { GestionMaterialesComponent } from './features/materiales/pages/gestion-materiales/gestion-materiales.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'materiales',
    component:GestionMaterialesComponent,
    canActivate:[authGuard]
  }

];