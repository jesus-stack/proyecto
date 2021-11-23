import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isValid = false;

  constructor() { }

  ngOnInit(): void {
    this.validarToken();
  }

  validarToken(){
    
    if(true){
      this.isValid = true;
    }
  }

}
