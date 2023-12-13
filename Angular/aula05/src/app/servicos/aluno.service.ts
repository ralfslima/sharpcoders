import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../modelos/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // URL
  private url:string = 'http://localhost:3000/alunos';

  // Construtor
  constructor(private http:HttpClient) { }

  // Método para selecionar alunos
  selecionar():Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url);
  }

  // Método para cadastrar alunos
  cadastrar(obj:Aluno):Observable<Aluno>{
    return this.http.post<Aluno>(this.url, obj);
  }

  // Método para remover alunos
  remover(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
    //return this.http.delete<any>(this.url+'/'+id);
  }

}
