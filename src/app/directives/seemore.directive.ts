import {
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[seeMore]',
})
export class ShowMoreDirective {
  constructor() {}

  @HostBinding('style.white-space') whiteSpace: string = 'nowrap';
  @HostBinding('style.text-overflow') overflowWrap: string = 'ellipsis';

  @HostListener('click') showMore() {
    if (this.whiteSpace === 'nowrap') {
      this.whiteSpace = 'normal';
      this.overflowWrap = 'break-word';
    } else {
      this.whiteSpace = 'nowrap';
      this.overflowWrap = 'ellipsis';
    }
  }
}
