import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product.model";

export const addProduct = createAction(
    '[Product] Add Product', 
    props<{product: Product}>()
);

export const setSearch = createAction(
    '[Product] Set Search',
    props<{search: string}>()
);

export const setCategory = createAction(
    '[Product] Set Category',
    props<{category: string}>()
);