import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { CheckInComponent } from './component/check-in/check-in.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './component/admin-home/usuarios/usuarios.component';
import { VueloListComponent } from './component/managements/vuelo/vuelo-list/vuelo-list.component';
import { VueloFormComponent } from './component/managements/vuelo/vuelo-form/vuelo-form.component';
import { TipoavionListComponent } from './component/managements/tipoavion/tipoavion-list/tipoavion-list.component';
import { TipoavionFormComponent } from './component/managements/tipoavion/tipoavion-form/tipoavion-form.component';
import { RutaListComponent } from './component/managements/ruta/ruta-list/ruta-list.component';
import { RutaFormComponent } from './component/managements/ruta/ruta-form/ruta-form.component';

import { UserInterceptorProviders } from './services/user-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    UsuariosComponent,
    LoginComponent,
    CheckInComponent,
    VueloListComponent,
    VueloFormComponent,
    TipoavionListComponent,
    TipoavionFormComponent,
    RutaListComponent,
    RutaFormComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [UserInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
