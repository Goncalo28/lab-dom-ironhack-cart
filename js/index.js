// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = (product.querySelector('.price span').innerHTML);
  const quantity = (product.querySelector('.quantity input').value);
  const subTotal = product.querySelector('.subtotal span');
  return subTotal.innerHTML = price * quantity;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = [...document.getElementsByClassName('product')];
  let result = 0
  allProducts.forEach(item => result += updateSubtotal(item));
  
  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerHTML = result;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode);
  let parent = target.parentNode.parentNode;
  parent.parentNode.removeChild(parent);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector('.create-product');
  let newName = newProduct.getElementsByTagName('input')[0];
  let newPrice = newProduct.getElementsByTagName('input')[1];
  let prodRow = document.querySelector('.product').innerHTML;
  let newProdRow = document.createElement('tr');

  newProdRow.classList.add('product');
  newProdRow.innerHTML = prodRow;
  document.querySelector('tbody').appendChild(newProdRow);
  newProdRow.querySelector('.name span').innerHTML = newName.value;
  newProdRow.querySelector('.price span').innerHTML = newPrice.value;
  
  newProdRow.querySelector('.btn-remove').onclick = (event) => removeProduct(event);

  newName.value = '';
  newPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButton = [...document.getElementsByClassName('btn btn-remove')];
  removeButton.forEach(removeBtn => {
    removeBtn.onclick = (event) => removeProduct(event);
  });
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
