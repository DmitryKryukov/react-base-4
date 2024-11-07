import { Product, ProductManager } from "./product";
import { Cart } from "./cart";
import { OrderManager, OrderStatus } from "./order";

const productManager = new ProductManager();
const orderManager = new OrderManager();
const cart = new Cart();

productManager.fetchProducts("https://raw.githubusercontent.com/DmitryKryukov/react-base-4/refs/heads/main/products.json")
    .then(() => {
        productManager.listProducts();
        cart.addProduct(productManager.getProductById(1));
        cart.addProduct(productManager.getProductById(2));
        
        console.log(`Товары в корзине: ${cart.getCartProducts()}`);
        console.log(`Общая стоимость корзины: ${cart.calculateTotal()}`);

        const order = orderManager.createOrder(cart.getCartProducts(), cart.calculateTotal());
        console.log(`Новый заказ: ${order.getOrderInfo()}`);
        order.changeStatus(OrderStatus.Confirmed);
        console.log(`Обновлённый заказ: ${order.getOrderInfo()}`);
        console.log(`Все заказы: ${orderManager.getAllOrders()}`);

    })
    .catch(error => {
        console.error('Ошибка получения товаров:', error);
    });