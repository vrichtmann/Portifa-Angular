import { Component, OnInit, Input } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-carousel-info',
  templateUrl: './carousel-info.component.html',
  styleUrls: ['./carousel-info.component.css']
})
export class CarouselInfoComponent implements OnInit {
  @Input() images:any[];
  @Input() plataform:string = "Unity 3D";
  @Input() description:string = "Jogo de Matemática";
  @Input() targetClass = "bs-example-modal-lg";
  @Input() youtubeVideo = "https://www.youtube.com/watch?v=hwvjX2OxXKg";
  yt = '<iframe class="w-100" src="https://www.youtube.com/embed/KS76EghdCcY?rel=0&amp;controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
  constructor(private embedService: EmbedVideoService) {

   }

  ngOnInit() {
    // console.log("images : " + this.images);
  }

  itemCtrl(_index) {
    console.log('Index atual: ' + _index);
  }

}
