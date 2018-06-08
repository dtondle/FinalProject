import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gallery } from '../../../json/projectData';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

  public photoList: any;
  public showOverlay = false;
  constructor() { }

  ngOnInit() {
    this.photoList = Gallery.photoList;
  }

}
