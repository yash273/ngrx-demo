import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";


const selectProductState = createFeatureSelector<ProductState>('product')

export const selectAllProduct = createSelector(
    selectProductState,
    s => s.products
);

// export const selectFilteredProduct  = createSelector(
//     selectAllProduct,


// )
