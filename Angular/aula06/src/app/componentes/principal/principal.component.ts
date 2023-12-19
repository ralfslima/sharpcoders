import { Component } from '@angular/core';
import { Aluno } from '../../modelo/Aluno'; 
import { FormularioComponent } from '../formulario/formulario.component';
import { TabelaComponent } from '../tabela/tabela.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormularioComponent, TabelaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Vetor de alunos
  vetor : Aluno[] = [
    {nome:'Alice', nota1:8, nota2:10},
    {nome:'Ricardo', nota1:10, nota2:10},
    {nome:'Luciana', nota1:7, nota2:9}
  ];

  // Função de cadastro
  cadastrarAluno(obj:Aluno):void{
    this.vetor.push(obj);
  }

}
