import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//stripe
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { Compra } from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  paymentHandler:any = null;
  vuelosAgregados: any[] = [];
  totales: any={};
  subtotal: any =0;
  descuento: any =0;
  total:any =0;
  colon :any = 0;
  toastr: any;
  router: any;



  constructor( private compraservice: CompraService, private token:TokenStorageService,
    private location:Location) {
    this.vuelosAgregados = this.getVuelosAgregados();
    this.totales = this.getTotales();
    this.subtotal = this.totales.subtotal;
    this.descuento = this.totales.descuento;
    this.total = this.totales.total;
    this.colon = this.totales.colon;
    this.invokeStripe();
  }

  ngOnInit(): void {






   



  }
  public getVuelosAgregados(): any {
    const vuelos = window.sessionStorage.getItem('precios');
    if (vuelos) {
      return JSON.parse(vuelos);
    }
    return [];
  }
  public getTotales(): any {
    const totales = window.sessionStorage.getItem('totales');
    if (totales) {
      return JSON.parse(totales);
    }
    return [];
  }

 makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51K1WGSFrzYsUbyY0AABxZZ6OXJHJbZrc2BcAjVzB9p1BVJVIakY9no9JmhYM9DB4vomZad5ZGOZ6AKMUCy9yU0Kd00smuVENUe',
      locale: 'auto',
      token:  (stripeToken: any) => {
        console.log(stripeToken)

        for (let index = 0; index < this.vuelosAgregados.length; index++) {
let compra: any=  {
  Usuario: this.token.getUser().user._id,
  Cantidad: this.vuelosAgregados[index].asiento,
  Subtotal: this.subtotal ,
  Descuento: this.descuento,
  MontoTotal: this.total,
}
this.compraservice.create(compra).subscribe(
  response => {
    if (response.success) {
      this.toastr.success(response.msg);
    } else {
      this.toastr.error(response.msg);
    }
    this.router.navigate(['']);
  },
  error => console.log(error)
)
        }
      }
    });

    paymentHandler.open({
      name: 'Skyline',
      description: 'Tiquete de avion',
      amount: this.total * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }

      window.document.body.appendChild(script);
    }
  }
  goBack(){
    this.location.back();
  }



}
