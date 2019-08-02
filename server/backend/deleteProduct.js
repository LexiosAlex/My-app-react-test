const deleteProduct = (id, productsData) => {
  return productsData.filter(item => item.id !== id);
};

export default deleteProduct;
