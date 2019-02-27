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

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/paris-ward-97210a16b/")
  }
}
