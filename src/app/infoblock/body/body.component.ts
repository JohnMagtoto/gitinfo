import { Component, OnInit, Input } from '@angular/core';

import { CollapseDirective } from '../../collapse';

@Component({
  selector: 'app-infoblock-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() bodyText: string;

  constructor() { }

  ngOnInit() {
  }

}
