import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { ProductState } from "./product.state";


const selectProductState = createFeatureSelector<ProductState>('product')

export const selectAllProduct = createSelector(
    selectProductState,
    s => s.products
);

export const selectFilter = createSelector(
    selectProductState,
    s => s.filter
)

export const selectSearch = createSelector(
    selectFilter,
    s => s.search
)

export const selectCategory = createSelector(
    selectFilter,
    s => s.category
)

export const selectCategories = createSelector(
    selectAllProduct,
    products => {
        const set = new Set(products.map(p => p.category));
        return ['All', ...Array.from(set)];
    }
)

export const selectFilteredProduct = createSelector(
    selectAllProduct,
    selectSearch,
    selectCategory,
    (products: Product[], search, category) => {

        const q = (search || '').trim().toLowerCase();
        return products.filter(p => {
            const matchesCategory =
                category === 'All' || p.category === category;

            const matchesSearch =
                q === '' ||
                p.name.toLowerCase().includes(q) ||
                (p.description || '').toLowerCase().includes(q);

            return matchesCategory && matchesSearch;
        });
    }


)
