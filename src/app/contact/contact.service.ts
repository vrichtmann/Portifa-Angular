import { Injectable } from '@angular/core';
import { FormContact } from "./form-contact";

@Injectable({providedIn: 'root'})

export class ContactService {
  http: any;

  constructor() { }

  sendEmail(formContact: FormContact){
    return {};/*this.http.post(API + "api/v1/Emails/SendFormContact", formContact);*/
  }

  sendEmail2(url, data){
    console.log("TESTE ENVIOU EMAIL");
   // return this.http.post(url, data);
  }
}
