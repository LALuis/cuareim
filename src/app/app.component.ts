import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComparsaMapComponent } from './components/comparsa-map/comparsa-map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComparsaMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
