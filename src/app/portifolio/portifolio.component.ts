import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, state, style } from  '@angular/animations';


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css'],
  animations: []
})
export class PortifolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openModal(){
    console.log("OPEN MODAL");
  }

  clickFilter(filter, nameFilter){
    var i;
    var x = document.getElementsByClassName("items");

    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i], "hideItem");
      this.w3RemoveClass(x[i], "showItem");
      if (x[i].className.indexOf(nameFilter) == -1 && nameFilter != "all"){
        this.w3AddClass(x[i], "hideItem");
      } else{
        this.w3AddClass(x[i], "showItem");
      }
    }

    var btns = document.getElementsByClassName("filterBT");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = btns[i].className.replace(" active", "");
    }
    filter.className = "filterBT active" ;
  }

  // Show filtered elements
  w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split("");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        var incremento = i == 0 ? " " : "" ;
        element.className += incremento + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1); 
      }
    }
    element.className = arr1.join(" ");
  }

}
