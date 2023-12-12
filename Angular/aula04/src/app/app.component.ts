import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostagemComponent } from "./componentes/postagem/postagem.component";
import { EnderecoComponent } from "./componentes/endereco/endereco.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PostagemComponent, EnderecoComponent]
})
export class AppComponent {
  title = 'aula04';
}
