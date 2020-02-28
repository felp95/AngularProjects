import { rootRouterConfig } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppComponent } from "./app.component";
import { MenuComponent } from "./Navegacao/menu/menu.component";
import { FooterComponent } from "./Navegacao/footer/footer.component";
import { HomeComponent } from "./Navegacao/home/home.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { DataBindingComponent } from "./Demos/data-binding/data-binding.component";
import { ListaComponent } from "./produtos/lista/lista.component";
import { ProdutoService } from "./produtos/produto.service";
import { ProdutoDetalheComponent } from "./Produtos/produto-detalhe/produto-detalhe.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  providers: [ProdutoService, { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
