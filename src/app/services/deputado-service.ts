import { Injectable } from '@angular/core';
import { Deputado } from '../model/deputado';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  deputados: Deputado[] = [
    {
    email: "joao.silva@camara.leg.br",
    id: 1,
    idLegislatura: 57,
    nome: "João da Silva",
    siglaPartido: "ABC",
    siglaUf: "SP",
    urlFoto: "https://picsum.photos/id/1011/200/300",
  },
  {
    email: "maria.oliveira@camara.leg.br",
    id: 2,
    idLegislatura: 57,
    nome: "Maria Oliveira",
    siglaPartido: "XYZ",
    siglaUf: "RJ",
    urlFoto: "https://picsum.photos/id/1012/200/300",
  },
  {
    email: "carlos.santos@camara.leg.br",
    id: 3,
    idLegislatura: 57,
    nome: "Carlos dos Santos",
    siglaPartido: "QWE",
    siglaUf: "MG",
    urlFoto: "https://picsum.photos/id/1013/200/300",
  },
  {
    email: "ana.costa@camara.leg.br",
    id: 4,
    idLegislatura: 57,
    nome: "Ana Costa",
    siglaPartido: "LMN",
    siglaUf: "BA",
    urlFoto: "https://picsum.photos/id/1014/200/300",
  },
  {
    email: "ricardo.pereira@camara.leg.br",
    id: 5,
    idLegislatura: 57,
    nome: "Ricardo Pereira",
    siglaPartido: "OPR",
    siglaUf: "RS",
    urlFoto: "https://picsum.photos/id/1015/200/300",
  },
  ];

  obterDeputados(): Deputado[]{
    return [...this.deputados];
  }
}
