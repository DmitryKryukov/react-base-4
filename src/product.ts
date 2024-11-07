interface IProduct {
    id: number;
    name: string;
    price: number;
}

class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) { }
}

interface IProductManager {
    addProduct(product: IProduct): void;
    fetchProducts(url: string): Promise<Product[]>;
    removeProduct(productId: number): void;
    getAllProducts(): IProduct[];
    getProductById(productId: number): IProduct | undefined;
    listProducts(): void;
}

class ProductManager implements IProductManager {
    private products: IProduct[] = [];

    async fetchProducts(url: string): Promise<Product[]> {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
            
            const data: IProduct[] = await response.json();
            this.products = data.map(product => new Product(product.id, product.name, product.price));
            return this.products;
        } catch (error) {
            console.error('Ошибка при получении продуктов:', error);
            return [];
        }
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
    }

    removeProduct(productId: number) {
        this.products = this.products.filter(product => product.id !== productId);
    }

    getAllProducts(): IProduct[] {
        return this.products;
    }

    getProductById(productId: number): IProduct | undefined{
        return this.products.find(product => product.id === productId);
    }

    listProducts(): void {
        this.products.forEach(product => {
            console.log(`${product.id}, ${product.name}, ${product.price} ₽`);
        });
    }
}

export { IProduct, IProductManager, Product, ProductManager }