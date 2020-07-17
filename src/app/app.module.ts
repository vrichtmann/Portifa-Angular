import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { AbouthMeComponent } from './abouth-me/abouth-me.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PortifolioModule } from './portifolio/portifolio.module';



@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    AbouthMeComponent,
    PortifolioComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, HeaderModule, PortifolioModule
  ],
  exports: [
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
