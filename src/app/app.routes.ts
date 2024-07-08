import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TextosComponent } from './pages/textos/textos.component';

export const routes: Routes = [
    {
        path: "",
        component: IndexComponent
    },
    {
        path: "textos",
        component: TextosComponent
    }
];
