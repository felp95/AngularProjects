import { Routes } from '@angular/router';
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { HomeComponent } from './Navegacao/home/home.component';
import { SobreComponent } from './Institucional/sobre/sobre.component';

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent }
];
