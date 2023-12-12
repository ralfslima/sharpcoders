import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Postagem } from '../modelos/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  // Construtor
  constructor(private http:HttpClient) { }

  // URLs
  private urlPostagem:string = 'https://jsonplaceholder.typicode.com/posts';

  // Método para retornar todas as postagens
  listarPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.urlPostagem);
  }

  // Observable: Executa requisições em períodos de tempo
  // Subscriber: Recebe o retorno das requisições
}
