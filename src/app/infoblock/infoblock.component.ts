import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

// directive to manipulate collapse of infobox body
import { CollapseDirective } from '../collapse';

@Component({
  selector: 'app-infoblock',
  templateUrl: './infoblock.component.html',
  styleUrls: ['./infoblock.component.css']
})
export class InfoblockComponent implements OnInit, AfterViewInit {
  private contents: object;

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  @ViewChild(BodyComponent) bodyComponent: BodyComponent;

  @Input() data: object;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.contents = this.data;
  }

  ngAfterViewInit(): void {
  }
}
