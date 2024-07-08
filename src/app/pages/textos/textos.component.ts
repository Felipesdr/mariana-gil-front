import { Component } from '@angular/core';
import { FooterLayoutComponent } from '../../components/footer-layout/footer-layout.component';
import { HeaderArtigosLayoutComponent } from '../../components/header-artigos-layout/header-artigos-layout.component';

@Component({
  selector: 'app-textos',
  standalone: true,
  imports: [
    HeaderArtigosLayoutComponent,
    FooterLayoutComponent
  ],
  templateUrl: './textos.component.html',
  styleUrl: './textos.component.scss'
})
export class TextosComponent {

}
