import { Product, ProductManager } from "./product";
import { Cart } from "./cart";
import { OrderManager } from "./order";

const productManager = new ProductManager();
const orderManager = new OrderManager();
const cart = new Cart();

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