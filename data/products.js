  export let product = JSON.parse(localStorage.getItem('product'));

  if (!product) {
    product = [{
      accountId: 'account1',
    }, {
      accountId: 'account2',
    }];
  }

  export function saveToStorage() {
    localStorage.setItem('product', JSON.stringify(product));
  };

  export function closeAccountDetails(accountId) {
    const newProduct = [];

    product.forEach((productItem) => {
      if (productItem.accountId !== accountId) {
        newProduct.push(productItem);
      }
    });

    product = newProduct;

    saveToStorage();
  };