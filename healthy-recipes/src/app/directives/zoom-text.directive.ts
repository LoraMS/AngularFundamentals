import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomText]'
})
export class ZoomTextDirective {
  className = 'zoom';

  constructor(private el: ElementRef, private render: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.render.addClass(this.el.nativeElement, this.className);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.removeClass(this.el.nativeElement, this.className);
  }
}
