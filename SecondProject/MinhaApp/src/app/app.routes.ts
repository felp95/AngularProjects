import { Routes } from "@angular/router";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { HomeComponent } from "./Navegacao/home/home.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { DataBindingComponent } from "./Demos/data-binding/data-binding.component";
import { ListaComponent } from './produtos/lista/lista.component';
import { ProdutoDetalheComponent } from './Produtos/produto-detalhe/produto-detalhe.component';

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent },
  { path: "feature", component: DataBindingComponent },
  { path: "produtos", component: ListaComponent },
  { path: "produtoDetalhe/:id", component: ProdutoDetalheComponent }
];
