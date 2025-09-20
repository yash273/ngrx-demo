import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { Product } from '../../models/product.model';
import { setCategory, setSearch } from '../../store/products/product.actions';
import { selectCategories, selectFilteredProduct } from '../../store/products/product.selectors';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  searchControl = new FormControl('');
  categoryControl = new FormControl('All');
  private readonly store = inject(Store);
  public product$: Observable<Product[]>;
  public categories$: Observable<string[]>;
  private destroy$ = new Subject<void>();

  constructor() {
    this.product$ = this.store.select(selectFilteredProduct);
    this.categories$ = this.store.select(selectCategories);
  }

  ngOnInit() {

    this.store.dispatch(setSearch({ search: '' }));
    this.store.dispatch(setCategory({ category: 'All' }));

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.store.dispatch(setSearch({ search: value ?? '' }));
    });

    this.categoryControl.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.store.dispatch(setCategory({ category: value ?? 'All' }))
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
