import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoundCardComponent } from './round-card/round-card.component';
import { LargeImageCardComponent } from './large-image-card/large-image-card.component';
import { SmallImageCardComponent } from './small-image-card/small-image-card.component';
import { RoundInfoCardComponent } from './round-info-card/round-info-card.component';
import { VertNavComponent } from './vert-nav/vert-nav.component';
import { SmallCardExpandComponent } from './small-card-expand/small-card-expand.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { TallCardComponent } from './tall-card/tall-card.component';
import { TourButtonComponent } from './tour-button/tour-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundCardComponent,
    LargeImageCardComponent,
    SmallImageCardComponent,
    RoundInfoCardComponent,
    VertNavComponent,
    SmallCardExpandComponent,
    CardCarouselComponent,
    TallCardComponent,
    TourButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
