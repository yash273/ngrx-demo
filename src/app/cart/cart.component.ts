import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { clearCart, removeFromCart, updateQuantity } from '../store/cart/cart.actions';
import { selectCartProducts, selectCartTotal } from '../store/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  private readonly store = inject(Store);

  items$: Observable<{ product: Product, quantity: number }[]>;
  total$: Observable<number>

  constructor() {
    this.items$ = this.store.select(selectCartProducts);
    this.total$ = this.store.select(selectCartTotal);
  }

  decrease(productId: string | number, quantity: number) {
    this.store.dispatch(updateQuantity({ productId, quantity: quantity - 1 }))
  }

  increase(productId: string | number, quantity: number) {
    this.store.dispatch(updateQuantity({ productId, quantity: quantity + 1 }))
  }

  remove(productId: string | number) {
    this.store.dispatch(removeFromCart({ productId }));
  }

  checkout() {
    this.store.dispatch(clearCart());
  }

}
