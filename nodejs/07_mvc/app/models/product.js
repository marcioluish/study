const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callBack) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return callBack([]);
        }
        callBack(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callBack) {
        getProductsFromFile(callBack);
    }

    static findById(id, callBack) {
        getProductsFromFile((products) => {
            const product = products.find((p) => p.id === id);
            callBack(product);
        });
    }
};
