import { inject, Injectable } from '@angular/core';
import { Deputado } from '../model/deputado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private http = inject(HttpClient)
  private APIURL = 'https://dadosabertos.camara.leg.br/api/v2'
  deputados: Deputado[] = [];

  obterDeputados():Observable<any>{
   return this.http.get(`${this.APIURL}/deputados?ordem=ASC&ordenarPor=nome`)
  }
}
