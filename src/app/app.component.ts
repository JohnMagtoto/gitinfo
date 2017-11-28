import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { InfoblockComponent } from './infoblock/infoblock.component';

import * as data from '../assets/data/gitinfo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  subtitle = 'app subtitle';
  contents: string;

  @Output() dataObject: object;

  ngOnInit(): void {
    // console.log(data);
    this.dataObject = data;
    this.title = this.dataObject['info'];
    this.subtitle = this.dataObject['description'];
    this.contents = this.dataObject['contents'];
  }

  ngAfterViewInit() {

  }
}
