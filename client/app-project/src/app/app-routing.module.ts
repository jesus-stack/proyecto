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
      { path: 'management/user', component: UsuariosComponent },
      { path: 'management/flight/list', component: VueloListComponent },
      { path: 'management/flight/form', component: VueloFormComponent },
      { path: 'management/flight/:id', component: VueloFormComponent },
      { path: 'management/reservation/list', component: ReservaListComponent },
      { path: 'management/reservation/form', component: ReservaFormComponent },
      { path: 'management/reservation/:id', component: ReservaFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
