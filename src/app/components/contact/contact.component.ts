import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: Email = {
    name: '',
    company: '',
    message: ''
  }

  enableSendEmail: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  sendEmail() {
    const company = this.email.company;
    const message = this.email.message;

    const link = "mailto:wardparis.pw@gmail.com"
             + "?subject=" + company 
             + "&body=" + message 
             ;

             window.location.href = link;

    this.email = {
      name: '',
      company: '',
      message: ''
    }   
  }
}
