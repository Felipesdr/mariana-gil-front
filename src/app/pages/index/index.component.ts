import { Component } from '@angular/core';
import { TopLayoutComponent } from '../../components/top-layout/top-layout.component';
import { ArtigosLayoutComponent } from '../../components/artigos-layout/artigos-layout.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    TopLayoutComponent,
    ArtigosLayoutComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
