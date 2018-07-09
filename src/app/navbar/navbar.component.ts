import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openGithub() {
    window.open("https://github.com/ParisBueller")
  }

  openTwitter() {
    window.open("https://twitter.com/messages/compose?recipient_id=762079861766705152")
  }
}
