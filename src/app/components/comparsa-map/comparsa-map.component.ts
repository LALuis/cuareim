import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-comparsa-map',
  templateUrl: './comparsa-map.component.html',
  styleUrls: ['./comparsa-map.component.scss'],
})
export class ComparsaMapComponent {
  activeSection: string | null = null;

  highlight(sectionId: string, isActive: boolean) {
    gsap.to(`.${sectionId}`, {
      fill: isActive ? 'transparent' : 'transparent',
      stroke: isActive ? 'red' : 'none',
      strokeWidth: isActive ? 1 : 0,
      duration: 0.3,
      cursor: isActive ? 'pointer' : 'default',
    });
  }

  openSection(sectionId: string) {
    console.log(`Abrir información sobre: ${sectionId}`);
  }
}
