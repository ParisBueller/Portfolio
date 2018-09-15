import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  
  sendEmail() {
    const company = (<HTMLInputElement>document.getElementById("companyInput")).value;
    const message = (<HTMLInputElement>document.getElementById("messageInput")).value;

    let link = "mailto:wardparis.pw@gmail.com"
             + "?subject=" + company 
             + "&body=" + message 
             ;

             window.location.href = link;

    
  }
}
