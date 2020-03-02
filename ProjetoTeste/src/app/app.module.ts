import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { TwitterComponent } from './twitter/twitter.component';
import { NavbartwitterComponent } from './twitter/navbartwitter/navbartwitter.component';
import { BannerComponent } from './twitter/banner/banner.component';
import { BarraInferiorComponent } from './twitter/barra-inferior/barra-inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FlexboxComponent,
    TwitterComponent,
    NavbartwitterComponent,
    BannerComponent,
    BarraInferiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
