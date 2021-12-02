import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css','./sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class AdminHomeComponent implements OnInit {

  isValid = false;
  user: any;

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.validarToken();
  }

  validarToken(){
    
    const token = this.tokenService.getToken();

    if(token != null){
      this.isValid = true;
      this.user = this.tokenService.getUser();
    }
  }

  cerrarSesion(){
    this.tokenService.signOut();
    this.router.navigate(['']);
  }

}
