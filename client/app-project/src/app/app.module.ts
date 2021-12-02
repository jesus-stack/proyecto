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
import { VueloListComponent } from './component/managements/vuelo/vuelo-list/vuelo-list.component';
import { VueloFormComponent } from './component/managements/vuelo/vuelo-form/vuelo-form.component';
import { TipoavionListComponent } from './component/managements/tipoavion/tipoavion-list/tipoavion-list.component';
import { TipoavionFormComponent } from './component/managements/tipoavion/tipoavion-form/tipoavion-form.component';
import { RutaListComponent } from './component/managements/ruta/ruta-list/ruta-list.component';
import { RutaFormComponent } from './component/managements/ruta/ruta-form/ruta-form.component';
import { UsuarioListComponent } from './component/managements/usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './component/managements/usuario/usuario-form/usuario-form.component';
import { CompraListComponent } from './component/managements/compra/compra-list/compra-list.component';
import { CompraFormComponent } from './component/managements/compra/compra-form/compra-form.component';
import { PagoComponent } from './component/pago/pago.component';

import { NgxPayPalModule } from 'ngx-paypal';

// Import the library
import { NgxStripeModule } from 'ngx-stripe';
import { UserInterceptorProviders } from './services/user-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { ResultsComponent } from './component/results/results.component';
import { BusquedaService } from './services/busqueda.service';
import { LogginGuard } from './guards/loggin.guard';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    LoginComponent,
    CheckInComponent,
    VueloListComponent,
    VueloFormComponent,
    TipoavionListComponent,
    TipoavionFormComponent,
    RutaListComponent,
    RutaFormComponent,
    ResultsComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    CompraListComponent,
    CompraFormComponent,
    PagoComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    NgxPayPalModule,
    NgxStripeModule.forRoot('pk_test_51K1WGSFrzYsUbyY0AABxZZ6OXJHJbZrc2BcAjVzB9p1BVJVIakY9no9JmhYM9DB4vomZad5ZGOZ6AKMUCy9yU0Kd00smuVENUe')
    FormsModule,
  ],
  providers: [UserInterceptorProviders, AuthGuard, LogginGuard, BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
