import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

  // Construtor
  constructor(private http:HttpClient){}

  // Inicialização
  ngOnInit(){
    // this.criarToken().subscribe(retorno => {
    //   // LocalStorage
    //   localStorage.setItem('token', retorno.token);
    //   // Console
    //   console.log(retorno);
    // });
  }

  // Método para criar um token
  criarToken():Observable<any>{
    return this.http.post<any>('http://www.localhost:8080', 
    {'usuario':'Ralf', 'senha':123});
  }
}
