import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
      console.log(this.user);
    }
  }

  cerrarSesion(){
    this.tokenService.signOut();
    window.location.reload();
  }
}
