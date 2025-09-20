import { createAction, props } from "@ngrx/store";

export const addToCart = createAction(
    '[Cart] Add',
    props<{ productId: string | number }>()
);

export const removeFromCart = createAction(
    '[Cart] Remove',
    props<{ productId: string | number }>()
);

export const updateQuantity = createAction(
    '[Cart] update',
    props<{ productId: string | number, quantity: number }>()
);

export const clearCart = createAction(
    '[Cart] Delete'
)