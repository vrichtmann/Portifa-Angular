import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject} from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home;
  abouth;
  portifolio;
  contact;

  abouthOffset;
  portfolioOffset;
  contactOffset;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.home = "active";
  }

  clickHome(){
    window.scroll(0,0);
  }

  clickAbout(){
    window.scroll(0,this.abouthOffset - 120);
  }

  clickContact(){
    window.scroll(0,this.contactOffset - 120);
    // TweenLite.to(window, .4, {
    //   scroll: {x: 0, y:0},
    //   ease: Power2.easeOut,
    //   force3D: true
    // });
    
    //window.scrollTo(0, 0);
    //TweenLite.to(window, 2, {scrollTo:400});
    // $('html, body').animate({
    // scrollTop: $('.js-section').offset().top
    // }, 200);
  }

  clickPortfolio(){
    window.scroll(0,this.portfolioOffset - 120);
  }
  

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.removeAllClass();
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // const currentSection = ;
    const bodyRect = document.body.getBoundingClientRect();
    
    let abouthEl:HTMLElement = document.getElementById("aboutSection");
    const elemBothRect = abouthEl.getBoundingClientRect();
    this.abouthOffset   = elemBothRect.top - bodyRect.top;

    let portfolioEl:HTMLElement = document.getElementById("portfolio");
    const elemRect = portfolioEl.getBoundingClientRect();
    this.portfolioOffset   = elemRect.top - bodyRect.top;
    

    let contactEl:HTMLElement = document.getElementById("contactSection");
    const elemContactRect = contactEl.getBoundingClientRect();
    this.contactOffset  = elemContactRect.top - bodyRect.top;

    const marginY = 200;
    
    if(number <  this.abouthOffset - marginY){
      this.home = "active";
    }else if (number >  this.abouthOffset - marginY && number <  this.portfolioOffset - marginY){
      this.abouth = "active";
    } else if (number >  this.portfolioOffset - marginY && number < this.contactOffset - marginY) {
      this.portifolio = "active";
    }else if (number > this.contactOffset - marginY) {
      this.contact = "active";
    }
    
  }

  removeAllClass(){
    this.home = "";
    this.abouth = "";
    this.portifolio = "";
    this.contact = "";
  }

}
