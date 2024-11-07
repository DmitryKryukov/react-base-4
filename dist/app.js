"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
const order_1 = require("./order");
const productManager = new product_1.ProductManager();
const orderManager = new order_1.OrderManager();
const cart = new cart_1.Cart();
productManager.fetchProducts("https://raw.githubusercontent.com/DmitryKryukov/react-base-4/refs/heads/main/products.json")
    .then(() => {
    demoStage();
})
    .catch(error => {
    console.error('Ошибка получения товаров:', error);
});
function demoStage() {
    console.log("Доступные товары:");
    productManager.listProducts();
    cart.addProduct(productManager.getProductById(1));
    cart.addProduct(productManager.getProductById(2));
    console.log(`Товары в корзине: ${cart.getCartProducts()}`);
    console.log(`Общая стоимость корзины: ${cart.calculateTotal()} ₽`);
    const order = orderManager.createOrder(cart.getCartProducts(), cart.calculateTotal());
    console.log(`Новый заказ: ${order.getOrderInfo()}`);
    order.changeStatus(order_1.OrderStatus.Confirmed);
    console.log(`Обновлённый заказ: ${order.getOrderInfo()}`);
    console.log(`Все заказы: ${orderManager.getAllOrders()}`);
}
