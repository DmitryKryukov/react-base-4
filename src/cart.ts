import { IProduct } from "./product";

interface ICart {
    addProduct(product: IProduct): void;
    removeProduct(productId: number): void;
    getCartProducts(): IProduct[];
    calculateTotal(): number;
    clearCart(): void;
    productCount: number;
}

class Cart implements ICart {
    private products: IProduct[] = [];

    addProduct(product: IProduct): void {
        const existingProduct = this.products.find(productInProducts => productInProducts.id === product.id);
        if (!existingProduct) {
            this.products.push(product);
        } else {
            console.log(`Товар с ID ${product.id} уже в корзине`);
        }
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.id !== productId);
    }

    getCartProducts(): IProduct[] {
        return this.products;
    }

    calculateTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    clearCart(): void {
        this.products = [];
    }

    get productCount(): number {
        return this.products.length;
    }
}

export { ICart, Cart };