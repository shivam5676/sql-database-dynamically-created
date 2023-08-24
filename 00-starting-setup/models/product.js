let products = [];

const fs = require("fs");
const path = require("path");

const getReadFile = (cb) => {
  const file = path.join(__dirname, "../", "data", "product.json");
  fs.readFile(file, (err, filecontent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(filecontent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getReadFile((products) => {
      products.push(this);

      fs.writeFile(file, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    
  }
  static fetchAll(cb) {
    getReadFile(cb);
  }
};
