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
import { ReservaFormComponent } from './component/managements/reserva/reserva-form/reserva-form.component';
import { ReservaListComponent } from './component/managements/reserva/reserva-list/reserva-list.component';
import { TipoavionListComponent } from './component/managements/tipoavion/tipoavion-list/tipoavion-list.component';
import { TipoavionFormComponent } from './component/managements/tipoavion/tipoavion-form/tipoavion-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'vuelo/list', component: VueloListComponent },
  { path: 'vuelo/form', component: VueloFormComponent },
  { path: 'vuelo/:id', component: VueloFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
   { path: 'tipoavion/list', component: TipoavionListComponent },
  { path: 'tipoavion/form', component: TipoavionFormComponent },
  { path: 'tipoavion/:id', component: TipoavionFormComponent },

  
  /*{ Manual del profe. Mantenimientos. (El del profe tiene varias cosas diferentes):

    path: 'dashboard',
    canActivate: [],
    component: PublicLayoutComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'blog/list', component: ListComponent },
      { path: 'blog/new', component: TipoavionFormComponent }, 
    ],
  },*/
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
