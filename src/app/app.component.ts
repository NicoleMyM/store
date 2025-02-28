import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  //template: `<div class="container mx-auto"><app-header [cart]="addToCart()"></app-header></div><router-outlet/>`
})
export class AppComponent {
  
  title = 'store';
}
