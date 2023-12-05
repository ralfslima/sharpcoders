import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente5',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente5.component.html',
  styleUrl: './componente5.component.css'
})
export class Componente5Component {

  // Objeto de formulário
  formulario = new FormGroup({
    email : new FormControl(''),
    senha: new FormControl('')
  });

  // Função de envio
  enviar():void{
    alert('Formulário enviado!');
  }

}
