"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const product_1 = require("./product");
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        if (product instanceof product_1.Product) {
            const existingProduct = this.products.find(productInProducts => productInProducts.id === product.id);
            if (!existingProduct) {
                this.products.push(product);
            }
            else {
                console.log(`Товар с ID ${product.id} уже в корзине`);
            }
        }
        else {
            console.warn(`Попытка добавление невалидного товара или undefined`);
        }
    }
    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }
    getCartProducts() {
        return this.products;
    }
    calculateTotal() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
    clearCart() {
        this.products = [];
    }
    get productCount() {
        return this.products.length;
    }
}
exports.Cart = Cart;
