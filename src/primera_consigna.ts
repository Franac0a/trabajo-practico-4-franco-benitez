// Tipos Fundamentales

let productName: string = "Fernet Branca";
let productPrice: number = 9999.99;

// Tipo Unión

let productId: string | number;
productId = "ABCD1234";
productId = 5577;

// Interfaz Básica

interface Product {
  name: string;
  price: number;
}

let myProduct: Product = {
  name: "SKY vodka",
  price: 3500,
};

console.log("Producto:", myProduct);
