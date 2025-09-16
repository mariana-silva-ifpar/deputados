import { Component } from '@angular/core';
import { DeputadoService } from '../services/deputado-service';
import { Deputado } from '../model/deputado';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  deputados: Deputado[] = [];

  constructor(private service: DeputadoService){
    this.deputados = this.service.obterDeputados();
  }

}
