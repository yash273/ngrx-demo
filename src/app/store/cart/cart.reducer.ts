import { createReducer, on } from "@ngrx/store";
import { CartItem } from '../../models/cart.model';
import { addToCart, clearCart, removeFromCart, updateQuantity } from "./cart.actions";
import { initialCartState } from "./cart.state";

export const cartReducer = createReducer(
    initialCartState,
    on(addToCart, (state, { productId }) => {
        const idx = state.items.findIndex(i => i.productId === productId);
        if (idx >= 0) {
            const items: CartItem[] = state.items.map((it: CartItem, i) => i === idx ? { ...it, quantity: it.quantity + 1 } : it);
            return { ...state, items };
        }
        return { ...state, items: [...state.items, { productId, quantity: 1 }] };
    }),
    on(updateQuantity, (state, { productId, quantity }) => {
        if (quantity >= 0) {
            const items: CartItem[] = state.items.map(i => i.productId === productId ? { ...i, quantity: quantity } : i);
            return { ...state, items }
        } else {
            return { ...state, items: state.items.filter(i => i.productId !== productId) };
        }
    }),
    on(removeFromCart, (state, { productId }) => {
        return { ...state, items: state.items.filter(i => i.productId !== productId) };
    }),
    on(clearCart, (state) => {
        return ({ ...state, items: [] })
    })
)