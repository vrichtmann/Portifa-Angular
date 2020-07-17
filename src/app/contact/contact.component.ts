import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ContactService } from './contact.service';
import { FormContact } from './form-contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  constructor(public contactService:ContactService) { }

  classCss1;
  classCss2;
  classCss3;
  classCss4;
  classCss5;


  @ViewChild('box') name: ElementRef;
  @ViewChild('box1') cellphone: ElementRef;
  @ViewChild('box2') email: ElementRef;
  @ViewChild('box3') subject: ElementRef;
  @ViewChild('box4') message: ElementRef;

  ngOnInit() {
    for(var i= 1; i < 6; i++){
      this["classCss" + i] = 'mfPlaceHolder default';
    }
  }

  changeClass(inputBox, index){
    this["classCss" + index] = 'mfPlaceHolder state-1'
    //console.log("name : " + name);
    
  }

  unfocus(inputText, index){
    if(inputText.length == 0){
      this["classCss" + index] = 'mfPlaceHolder default'
    }
    console.log('name: ', this.name.nativeElement.value);
    console.log('cellphone: ', );
    console.log('email: ', this.email.nativeElement.value);
    console.log('subject: ', this.subject.nativeElement.value);
    console.log('message: ', this.message.nativeElement.value);
    // console.log("inputText : " + inputText);
    //this.classCss = 'none'
  }

  public sendEmail(){
    const user:FormContact = {name: this.name.nativeElement.value,
                              cellphone: this.cellphone.nativeElement.value,
                              email: this.email.nativeElement.value,
                              subject: this.subject.nativeElement.value,
                              message: this.message.nativeElement.value}

    console.log(JSON.stringify(user));
    
    let user2 = {
      name: this.name.nativeElement.value,
      email: this.email.nativeElement.value
    }

     this.contactService.sendEmail2("http://localhost:3000/sendmail", user2);

    //  .subscribe(
    //   data => {
    //     let res:any = data;
    //     console.log(
    //      user2.name
    //     );
    //   },
    //   err => {
    //     console.log("err : " + err);
    //   }

    // )


    //  this.contactService.sendEmail(user).subscribe(
    //    res => { alert("Dados enviado com sucesso!")}, error => {console.log(error)}
    //  );
  }

}

