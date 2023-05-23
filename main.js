class ProductManager {
    constructor() {
        this.products = []
    }

    static id = 0

    addProduct (title, description, price, image, code, stock){
        ProductManager.id++
        this.products.push({ id:ProductManager.id, title, description, price, image, code, stock});
    }

    getProduct(){
        return this.products;
    }

    getProductById(id){
        if(this.products.find((producto) => producto.id === id)){
            console.log("Producto encontrado")
        } else{
        console.log("Producto no existente")
        }
    }
}

const productos = new ProductManager;

console.log(productos.getProduct());

productos.addProduct("Tractor", "Tractor con doble eje", 45000, "thumbnail:sinImagen", "abc123", 25 );

console.log(productos.getProduct());

productos.addProduct("COsechadora", "Cosechadora Axial", 245000, "thumbnail:sinImagen", "abc23",1);

console.log(productos.getProduct());

productos.getProductById(3);