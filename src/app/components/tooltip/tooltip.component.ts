import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `<div class="tooltip" [style.left.px]="x" [style.top.px]="y">
    {{ text }}
  </div>`,
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() text = '';
  @Input() x = 0;
  @Input() y = 0;
}
