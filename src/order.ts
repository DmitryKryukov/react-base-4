import { IProduct } from "./product";
enum OrderStatus {
    Pending = "Ожидает подтверждения",
    Confirmed = "Подтверждён",
    Shipped = "Отправлен",
    Delivered = "Доставлен",
    Cancelled = "Отменён",
}

interface IOrder {
    id: number;
    products: IProduct[];
    status: OrderStatus;
    total: number;
    changeStatus(newStatus: OrderStatus): void;
    getOrderInfo(): string;
}

class Order implements IOrder {
    public products: IProduct[];
    public status: OrderStatus = OrderStatus.Pending;

    constructor(public id: number, products: IProduct[], public total: number) {
        this.products = products;
    }

    changeStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
    }

    getOrderInfo(): string {
        return `ID заказа: ${this.id}, cтатус: ${this.status}, итоговая сумма: ${this.total}`;
    }
}

interface IOrderManager {
    createOrder(products: IProduct[], total: number): Order;
    getAllOrders(): Order[];
    getOrderById(orderId: number): Order | undefined;
}

class OrderManager implements IOrderManager {
    private orders: Order[] = [];
    private orderCounter: number = 1;

    createOrder(products: IProduct[], total: number): Order {
        const newOrder = new Order(this.orderCounter++, products, total);
        this.orders.push(newOrder);
        return newOrder;
    }

    getAllOrders(): Order[] {
        return this.orders;
    }

    getOrderById(orderId: number): Order | undefined {
        return this.orders.find(order => order.id === orderId);
    }
}

export { OrderStatus, Order, OrderManager, IOrder, IOrderManager };