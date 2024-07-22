import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-conteudo-textos-layout',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './conteudo-textos-layout.component.html',
  styleUrl: './conteudo-textos-layout.component.scss'
})
export class ConteudoTextosLayoutComponent {

}
