import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from './Pessoa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // Variável de texto
  texto:string = 'Aprendendo a trabalhar com o Jasmine e o Karma';

  // Função para retornar a soma
  soma(n1:number, n2:number):any{
    return n1+n2;
  }

  // Função para retornar um objeto do tipo Pessoa
  retornarPessoa(obj:Pessoa):any{
    return obj;
  }

}
