import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //template: `<div class="container mx-auto"><app-header [cart]="addToCart()"></app-header></div><router-outlet/>`
})
export class AppComponent {
  
  title = 'store';
}
