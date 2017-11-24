import {Directive, Input, HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[appInfoblockCollapse]'
})

export class CollapseDirective {

  h: any;

  @HostBinding('class.collapsing')
  private isCollapsing: boolean;

  // style
  @HostBinding('style.visibility')
  private visibility: string;


  @Input()
  private set appInfoblockCollapse(value: boolean) {
    if (value !== undefined) {
      if (value) {
        this.hide();
      }else {
        this.show();
      }
    }
    //
  }

  constructor(public el: ElementRef) {
    this.measureHeight();
  }

  measureHeight() {
    const elem = this.el.nativeElement;
    // lets be sure the element has display:block style
    elem.className = elem.className.replace('collapse', '');
    this.h = elem.scrollHeight;
  }

  hide() {
    // this.height = this.h + 'px';
    setTimeout(() => {
        this.visibility = 'hidden';
        this.isCollapsing = true; // apply 'collapsing' class
    }, 1);
  }
  show() {
    // this.height = '0px';
    setTimeout(() => {
        this.visibility = 'visible';
        this.isCollapsing = true; // apply 'collapsing' class
    }, 1);
  }

}
