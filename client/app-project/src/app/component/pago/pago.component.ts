import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//stripe
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { ToastrService } from 'ngx-toastr';
import { Compra } from 'src/app/models/compra';
import { CheckoutServiceService } from 'src/app/services/checkout-service.service';
import { CompraService } from 'src/app/services/compra.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  paymentHandler: any = null;
  vuelosAgregados: any[] = [];
  totales: any = {};
  subtotal: any = 0;
  descuento: any = 0;
  total: any = 0;
  colon: any = 0;
  pagar: boolean = true;

  constructor(private compraservice: CompraService, private token: TokenStorageService,
    private location: Location, private checkouservice: CheckoutServiceService, private tostr: ToastrService) {
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
      token: (stripeToken: any) => {
        console.log(stripeToken)
        let checkout = {
          pago: stripeToken,
          cantidad: Math.floor(this.total),

        }
        this.checkouservice.create(checkout).subscribe();
        this.pagar = false;
      }
    });

    paymentHandler.open({
      name: 'Skyline',
      description: 'Tiquete de avion',
      amount: this.total * 100
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
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
  goBack() {
    this.location.back();
  }



}
