// class Product {
// //   title = "Default";
// //   imageUrl;
// //   description;
// //   price;

//   //   myFunc() {}
//   constructor(title, image, desc, price) {
//     this.title = title;
//     this.imageUrl = image;
//     this.description = desc;
//     this.price = price;
//   }
// }

class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const myProd = new Product();
console.log(myProd);

// Also possible:"
// myProd.description = "The best product in the world";

const myProd2 = new Product("Tepih", "../../../", "Nema bolji", 130);
console.log(myProd2);
