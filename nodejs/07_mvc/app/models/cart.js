const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };

            if (!err) {
                cart = JSON.parse(fileContent);
            }

            // Analyze the cart => Find existing product
            const productListIndex = cart.products.findIndex(
                (prod) => prod.id === id
            );
            // const existingProduct = cart.products[productListIndex];

            // Add new product / increase quantity
            // let updatedProduct;
            // if (existingProduct) {
            if (productListIndex) {
                // updatedProduct = { ...existingProduct };
                // updatedProduct.qty += 1;
                // cart.products[existingProduct] = updatedProduct;
                cart.products[productListIndex].qty += 1;
            } else {
                // updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, { id: id, qty: 1 }];
            }

            cart.totalPrice += +productPrice;

            // Write cart back to json
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
};
