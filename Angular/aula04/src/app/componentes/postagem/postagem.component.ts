import { Component } from '@angular/core';
import { PostagemService } from '../../servicos/postagem.service';
import { Postagem } from '../../modelos/Postagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {

  // Construtor
  constructor(private servicoPostagem:PostagemService){}

  // Vetor de postagens
  postagens:Postagem[] = [];

  // Ao iniciar (O componente é criado)
  ngOnInit(){
    this.listarPostagens();
  }

  // Função para listar as postagens
  listarPostagens():void{
    this.servicoPostagem.listarPostagens()
    .subscribe(retorno => { 
      // console.table(retorno); 
      this.postagens = retorno;
    })
  }

}
