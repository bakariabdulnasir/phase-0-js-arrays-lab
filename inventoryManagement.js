// Write your code here
// object declaration 
let products = ["Laptop", "Phone", "Headphones", "Monitor"]; 
//logFirstProduct function

function logFirstProduct() {
    console.log(products[0]);

   
}
//addProduct function
function addProduct(productName) {
    products.push(productName);
}
//updateProduct function
function updateProductName(position, newName) {
    products[position] = newName;
}
//removeProduct function
function removeLastProduct() {
    products.pop();
}


// Export the necessary parts for testing
// Export for testing
module.exports = {
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
  products
};
