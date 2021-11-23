import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { UsuariosComponent } from './component/admin-home/usuarios/usuarios.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CheckInComponent } from './component/check-in/check-in.component';
import { VueloFormComponent } from './component/managements/vuelo/vuelo-form/vuelo-form.component';
import { VueloListComponent } from './component/managements/vuelo/vuelo-list/vuelo-list.component';
import { TipoavionListComponent } from './component/managements/tipoavion/tipoavion-list/tipoavion-list.component';
import { TipoavionFormComponent } from './component/managements/tipoavion/tipoavion-form/tipoavion-form.component';
import { RutaListComponent } from './component/managements/ruta/ruta-list/ruta-list.component';
import { RutaFormComponent } from './component/managements/ruta/ruta-form/ruta-form.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'check-in', component: CheckInComponent },
    ]
  },

  {
    path: 'dashboard',
    component: AdminHomeComponent,
    children: [
      { path: 'user', component: UsuariosComponent },
      { path: 'vuelo/list', component: VueloListComponent },
      { path: 'vuelo/form', component: VueloFormComponent },
      { path: 'vuelo/:id', component: VueloFormComponent },
      { path: 'tipoavion/list', component: TipoavionListComponent },
      { path: 'tipoavion/form', component: TipoavionFormComponent },
      { path: 'tipoavion/:id', component: TipoavionFormComponent },
      { path: 'ruta/list', component: RutaListComponent },
      { path: 'ruta/form', component: RutaFormComponent },
      { path: 'ruta/:id', component: RutaFormComponent },
    ]
  },
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
