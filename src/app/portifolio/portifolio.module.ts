import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselInfoComponent } from './carousel-info/carousel-info.component';
import { PortifolioContentComponent } from './portifolio-content/portifolio-content.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
@NgModule({
  declarations: [PortifolioContentComponent, CarouselInfoComponent],
  imports: [
    CommonModule, HttpClientModule, EmbedVideo.forRoot()
  ],
  exports:[
    CarouselInfoComponent,
    PortifolioContentComponent
  ]
})
export class PortifolioModule { }
