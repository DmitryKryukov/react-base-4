"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class ProductManager {
    constructor() {
        this.products = [];
    }
    async fetchProducts(url) {
        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
            const data = await response.json();
            this.products = data.map(product => new Product(product.id, product.name, product.price));
            return this.products;
        }
        catch (error) {
            console.error('Ошибка при получении продуктов:', error);
            return [];
        }
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }
    getAllProducts() {
        return this.products;
    }
    getProductById(productId) {
        return this.products.find(product => product.id === productId);
    }
    listProducts() {
        console.log(`Доступные товары:`);
        this.products.forEach(product => {
            console.log(`ID: ${product.id}, название: ${product.name}, стоимость: ${product.price}`);
        });
    }
}
exports.ProductManager = ProductManager;
