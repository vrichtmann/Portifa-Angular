import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portifolio-content',
  templateUrl: './portifolio-content.component.html',
  styleUrls: ['./portifolio-content.component.css']
})
export class PortifolioContentComponent implements OnInit {
  
  @Input() productImg = "MathForce";
  @Input() courseName = "Math Force";
  @Input() popupTarget = "'.MathForce_popup'";
  
  constructor() { }

  ngOnInit() {
    setInterval(() => { 
      var targetButton = document.getElementById(this.productImg);
      targetButton.setAttribute('data-target', this.popupTarget);
    }, 1);
  }

}
