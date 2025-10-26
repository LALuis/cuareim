// app-reveal.component.ts
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-reveal',
  standalone: true,
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[@reveal]': 'state',
    '[@reveal].params': '{ x: x, y: y, scale: scale, blur: blur, timing: timing }',
    style: 'display:block; will-change: opacity, transform, filter;',
  },
  animations: [
    trigger('reveal', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translate({{x}}px, {{y}}px) scale({{scale}})',
          filter: 'blur({{blur}}px)',
        }),
        { params: { x: 0, y: 24, scale: 1, blur: 0, timing: '600ms ease-out' } }
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'none',
          filter: 'none',
        })
      ),
      transition('hidden => visible', [animate('{{timing}}')]),
    ]),
  ],
})
export class AppRevealComponent implements OnInit, OnDestroy {
  @Input() x = 0; // desplazamiento horizontal inicial
  @Input() y = 24; // desplazamiento vertical inicial
  @Input() scale = 1; // escala inicial
  @Input() blur = 0; // blur inicial (px)
  @Input() timing = '600ms ease-out';
  @Input() threshold = 0.2;
  @Input() rootMargin = '0px 0px -10% 0px';
  @Input() once = true;

  state: 'hidden' | 'visible' = 'hidden';
  private obs?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.state = 'visible';
            if (this.once) this.obs?.unobserve(this.el.nativeElement);
          } else if (!this.once) {
            this.state = 'hidden';
          }
        }
      },
      { threshold: this.threshold, rootMargin: this.rootMargin }
    );
    this.obs.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.obs?.disconnect();
  }
}
