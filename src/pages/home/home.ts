import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
address:string="";
cep;
errorMessage;
  constructor(public navCtrl: NavController, private rest:RestProvider) {
    
  }

  GetAddress(){
    this.errorMessage = "";
    this.address = null;

    this.rest.GetAddress(this.cep)
      .subscribe(
        (data)=>{
        this.address = data;
        this.cep = '';

        if(data.logradouro == ""){
            this.errorMessage = "Cidade com CEP único!"
          }
        },
        (error)=>{
          this.errorMessage ="Cep inválido!";
        })
  }
}
