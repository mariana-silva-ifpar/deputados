import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Deputado } from './model/deputado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'deputados';
}
