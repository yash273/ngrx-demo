import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { addProduct } from '../../store/products/product.actions';
import { selectCategories } from '../../store/products/product.selectors';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  private readonly store = inject(Store);
  private readonly router = inject(Router);
  public categories$: Observable<string[]>

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    category: new FormControl('All')
  });

  constructor() {
    this.categories$ = this.store.select(selectCategories);
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const id = Date.now().toString();
      const ratings = 0;
      const product: Product = {
        id: id,
        rating: ratings,
        name: this.productForm.value.name ?? '',
        price: this.productForm.value.price ?? 0,
        description: this.productForm.value.description ?? '',
        category: this.productForm.value.category ?? ''

      }
      this.store.dispatch(addProduct({ product }));
      this.router.navigate(['/products']);
    }
  }



}
