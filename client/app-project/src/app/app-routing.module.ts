import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
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
import { UsuarioListComponent } from './component/managements/usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './component/managements/usuario/usuario-form/usuario-form.component';
import { CompraListComponent } from './component/managements/compra/compra-list/compra-list.component';
import { CompraFormComponent } from './component/managements/compra/compra-form/compra-form.component';

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
     { path: 'management/user/list', component: UsuarioListComponent },
     { path: 'management/user/form', component: UsuarioFormComponent },
     { path: 'management/user/:id', component: UsuarioFormComponent },
      { path: 'management/flight/list', component: VueloListComponent },
      { path: 'management/flight/form', component: VueloFormComponent },
      { path: 'management/flight/:id', component: VueloFormComponent },
      { path: 'management/tipoavion/list', component: TipoavionListComponent },
      { path: 'management/tipoavion/form', component: TipoavionFormComponent },
      { path: 'management/tipoavion/:id', component: TipoavionFormComponent },
      { path: 'management/ruta/list', component: RutaListComponent },
      { path: 'management/ruta/form', component: RutaFormComponent },
      { path: 'management/ruta/:id', component: RutaFormComponent },
      { path: 'management/compra/list', component: CompraListComponent },
     { path: 'management/compra/form', component: CompraFormComponent },
     { path: 'management/compra/:id', component: CompraFormComponent },
    ]
  },
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
