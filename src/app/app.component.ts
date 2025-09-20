import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stat-manage';
}
