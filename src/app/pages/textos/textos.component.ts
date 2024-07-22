import { Component } from '@angular/core';
import { FooterLayoutComponent } from '../../components/footer-layout/footer-layout.component';
import { HeaderArtigosLayoutComponent } from '../../components/header-artigos-layout/header-artigos-layout.component';
import { ConteudoTextosLayoutComponent } from '../../components/conteudo-textos-layout/conteudo-textos-layout.component';

@Component({
  selector: 'app-textos',
  standalone: true,
  imports: [
    HeaderArtigosLayoutComponent,
    FooterLayoutComponent,
    ConteudoTextosLayoutComponent
  ],
  templateUrl: './textos.component.html',
  styleUrl: './textos.component.scss'
})
export class TextosComponent {

}
