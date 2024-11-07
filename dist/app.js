"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
const order_1 = require("./order");
const productManager = new product_1.ProductManager();
const orderManager = new order_1.OrderManager();
const cart = new cart_1.Cart();
productManager.fetchProducts("./products.json");
productManager.listProducts();
/*
// Просмотр товаров в магазине
console.log("Доступные товары:", productManager.getAllProducts());

// Добавляем товары в корзину
cart.addProduct(product1);
cart.addProduct(product2);

// Проверяем содержимое корзины и общую стоимость
console.log("Товары в корзине:", cart.getCartItems());
console.log("Общая стоимость корзины:", cart.calculateTotal());

// Создаем заказ на основе содержимого корзины
const order = orderManager.createOrder(cart.getCartItems(), cart.calculateTotal());
console.log("Новый заказ:", order.getOrderInfo());

// Изменяем статус заказа
order.changeStatus(OrderStatus.Confirmed);
console.log("Обновленный заказ:", order.getOrderInfo());

// Просмотр всех заказов
console.log("Все заказы:", orderManager.getAllOrders());*/ 
