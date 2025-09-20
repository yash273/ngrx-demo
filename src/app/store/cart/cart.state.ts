import { CartItem } from "../../models/cart.model";

export interface CartState {
    items: CartItem[]
};

export const initialCartState: CartState = {
    items: []
}