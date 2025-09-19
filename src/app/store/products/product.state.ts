import { Product } from "../../models/product.model";

export interface ProductState {
    products: Product[];
    filter: { search: string, category: string }
};

const initialProducts: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, description: 'A high-performance laptop', category: 'Electronics', rating: 4.5 },
    { id: 2, name: 'Smartphone', price: 699.99, description: 'A latest model smartphone', category: 'Electronics', rating: 4.7 },
    { id: 3, name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones', category: 'Accessories', rating: 4.3 },
    { id: 4, name: 'Coffee Maker', price: 49.99, description: 'Brews excellent coffee', category: 'Home Appliances', rating: 4.0 },
    { id: 5, name: 'Electric Kettle', price: 29.99, description: 'Boils water quickly', category: 'Home Appliances', rating: 4.2 }
];

export const initialProductState : ProductState = {
    products: initialProducts,
    filter: { search: '', category: 'All' }
}