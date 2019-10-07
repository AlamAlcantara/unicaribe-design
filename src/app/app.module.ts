import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {NgImageSliderModule} from 'ng-image-slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ContactCenterComponent } from './contact-center/contact-center.component';
import { SliderComponent } from './slider/slider.component';
import { ApartadosComponent } from './apartados/apartados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactCenterComponent,
    SliderComponent,
    ApartadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
