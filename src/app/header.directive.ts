import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class HeaderDirective implements OnInit {
  @Input() color: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.color);
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = '50px';
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlightColor('red');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlightColor('green');
  }

  highlightColor(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }
}
