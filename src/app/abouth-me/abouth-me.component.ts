import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abouth-me',
  templateUrl: './abouth-me.component.html',
  styleUrls: ['./abouth-me.component.css']
})
export class AbouthMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  donwloadCV(){
    var file_path = 'assets/curriculum/english.pdf';

		var donwloadIMG = document.createElement("a");
		donwloadIMG.href = file_path;
		donwloadIMG.download = "Victor Richtmann";
		donwloadIMG.target = '_blank'; 
    donwloadIMG.click();
  }

}
