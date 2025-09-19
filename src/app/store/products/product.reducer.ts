import { createReducer, on } from "@ngrx/store";
import { initialProductState } from "./product.state";
import { addProduct, setCategory, setSearch } from "./product.actions";

export const productsReducer = createReducer(
    initialProductState,
    on(addProduct, (state, { product }) => ({ ...state, products: [...state.products, product] })),
    on(setSearch, (state, { search }) => ({ ...state, filter: { ...state.filter, search } })),
    on(setCategory, (state, { category }) => ({ ...state, filter: { ...state.filter, category } }))
);