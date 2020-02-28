import { rootRouterConfig } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';

import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./Navegacao/menu/menu.component";
import { FooterComponent } from "./Navegacao/footer/footer.component";
import { HomeComponent } from "./Navegacao/home/home.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { DataBindingComponent } from "./Demos/data-binding/data-binding.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent
  ],
  imports: [BrowserModule, FormsModule,[RouterModule.forRoot(rootRouterConfig)]],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
