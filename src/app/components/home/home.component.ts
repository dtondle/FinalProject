import { Component, OnInit } from '@angular/core';
import { Projects } from '../../../json/projectData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public projectList: any;
  constructor() { }

  ngOnInit() {
    this.projectList = Projects.ProjectList;
  }

}
