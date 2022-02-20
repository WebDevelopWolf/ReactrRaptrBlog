import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sticky = false;

  constructor(private window: Window) { }

  // Sticky Heading
  @HostListener("window:scroll", []) onWindowScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scroll > 245) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    console.log(this.sticky);
  }

  ngOnInit() {

  }

}
