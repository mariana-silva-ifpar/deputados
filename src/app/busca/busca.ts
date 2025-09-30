import { Component } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../services/deputado-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-busca',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca {
  deputados: Deputado[] = [];
  form: FormGroup;
  semResultado: boolean = false;
  loading: boolean = false;

    constructor(
      private service: DeputadoService,
      private fb: FormBuilder){
        this.form = this.fb.group({
          nome: [null, [Validators.required, Validators.minLength(2)]]
    })
      }

    buscarDeputado(){
      const nome = this.form.get('nome')?.value;
      this.loading = true;

      if(nome){
      this.service.obterDeputadoPorNome(nome).subscribe({
              next: (res: any) => {
                this.deputados = res.dados;
                this.loading = false;

                if(res.dados.length === 0){
                  this.semResultado = true;
                  this.loading = false;
                }
              },
              error: () => {
                this.semResultado = true;
              }
            })
          }
      }

      limparBusca(){
        this.deputados = [];
        this.form.reset();
        this.semResultado = false;
        this.loading = false;
      }

}
