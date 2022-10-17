import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * String Interpolation: utiliazar valores que 
   */
  title = 'data-binding';
  n1:number = 0
  n2:number = 0
  tipoInput:String  = "password"


  somar(x:number, y:number){
    return x+y
  }
          //esconder senha com Angula 
  mudarTipoDoInput(): void{
    if(this.tipoInput == 'password')
    {this.tipoInput = 'text'
  }else{
    this.tipoInput= 'password'
  }
  }  
}
