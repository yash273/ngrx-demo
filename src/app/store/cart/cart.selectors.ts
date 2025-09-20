import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { selectAllProduct } from "../products/product.selectors";
import { CartState } from "./cart.state";

const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
    selectCartState, s => s.items
);

export const selectCartProducts = createSelector(
    selectCartItems, selectAllProduct,
    (items, products) => items
        .map(it => {
            const product = products.find(p => p.id === it.productId);
            return product ? { product, quantity: it.quantity } : null;
        })
        .filter((x): x is { product: Product; quantity: number } => x !== null)
);

export const selectCartTotal = createSelector(
    selectCartProducts,
    ent => {
        return ent.reduce((acc, cur) => acc + (cur.product?.price || 0) * cur.quantity, 0)
    }
)