import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  constructor(public http: Http) {
  }

  GetAddress(cep){
    return this.http.get('http://www.viacep.com.br/ws/' + cep +  '/json/')
      .map((response)=> response.json());
  }
}
