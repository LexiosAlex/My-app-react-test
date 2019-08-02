const carryDeletedCategoryProducts = (id, productsData) => {
  const filteredProducts = [...productsData];
  filteredProducts
    .filter(item => item.categoryId === +id)
    .map(it => (it.categoryId = 0));

  return filteredProducts;
};

export default carryDeletedCategoryProducts;
