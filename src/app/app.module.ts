import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {NgImageSliderModule} from 'ng-image-slider';
import {CountUpModule} from 'countup.js-angular2';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ContactCenterComponent } from './contact-center/contact-center.component';
import { SliderComponent } from './slider/slider.component';
import { ApartadosComponent } from './apartados/apartados.component';
import { SolucionesUniversitariasComponent } from './soluciones-universitarias/soluciones-universitarias.component';
import { CalendariosComponent } from './calendarios/calendarios.component';
import { ContadorComponent } from './contador/contador.component';
import { NoticiasRecientesComponent } from './noticias-recientes/noticias-recientes.component';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DocentesDestacadosComponent } from './docentes-destacados/docentes-destacados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactCenterComponent,
    SliderComponent,
    ApartadosComponent,
    SolucionesUniversitariasComponent,
    CalendariosComponent,
    ContadorComponent,
    NoticiasRecientesComponent,
    CardNoticiaComponent,
    UserCardComponent,
    DocentesDestacadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgImageSliderModule,
    CountUpModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
