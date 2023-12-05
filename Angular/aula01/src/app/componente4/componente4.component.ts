import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente4.component.html',
  styleUrl: './componente4.component.css'
})
export class Componente4Component {

  // Variável para armazenar um texto
  texto:string = '';

  // Variáveis para armazenar os inputs do formulário
  email:string='';
  senha:string='';

}
