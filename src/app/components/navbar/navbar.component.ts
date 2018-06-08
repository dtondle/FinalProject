import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  public projectName: string;
  constructor() { 
    this.projectName = 'XYZ';
  }

  ngOnInit() {
  }

}
