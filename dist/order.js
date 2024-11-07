"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = exports.Order = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F";
    OrderStatus["Confirmed"] = "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D";
    OrderStatus["Shipped"] = "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D";
    OrderStatus["Delivered"] = "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D";
    OrderStatus["Cancelled"] = "\u041E\u0442\u043C\u0435\u043D\u0451\u043D";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
class Order {
    constructor(id, products, total) {
        this.id = id;
        this.total = total;
        this.status = OrderStatus.Pending;
        this.products = products;
    }
    changeStatus(newStatus) {
        this.status = newStatus;
    }
    getOrderInfo() {
        return `ID заказа: ${this.id}, cтатус: ${this.status}, итоговая сумма: ${this.total}`;
    }
}
exports.Order = Order;
class OrderManager {
    constructor() {
        this.orders = [];
        this.orderCounter = 1;
    }
    createOrder(products, total) {
        const newOrder = new Order(this.orderCounter++, products, total);
        this.orders.push(newOrder);
        return newOrder;
    }
    getAllOrders() {
        return this.orders;
    }
    getOrderById(orderId) {
        return this.orders.find(order => order.id === orderId);
    }
}
exports.OrderManager = OrderManager;
