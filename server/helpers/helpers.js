const PRODUCTS_PER_PAGE = 10;

export const carryDeletedCategoryProducts = (id, productsData) => {
  const filteredProducts = [...productsData];
  filteredProducts
    .filter(item => item.categoryId === +id)
    .map(it => (it.categoryId = 0));

  return filteredProducts;
};

export const changeProductInArray = (reqBody, productsData) => {
  return productsData.map(item =>
    item.id === reqBody.id
      ? {
          categoryId: reqBody.categoryId,
          id: reqBody.id,
          key: reqBody.id,
          name: reqBody.name,
          price: reqBody.price,
          wholePrice: reqBody.wholePrice
        }
      : item
  );
};

export const deleteCategory = (id, categoriesData) => {
  return categoriesData.filter(item => item.categoryId !== +id);
};

export const deleteProduct = (id, productsData) => {
  return productsData.filter(item => item.id !== id);
};

export const getMax = (items, fieldName) =>
  Math.max(...items.map(i => i[fieldName]));

export const queryStringProductsParser = (query, products) =>
  products
    .filter(
      product => !query.categoryId || +query.categoryId === product.categoryId
    )
    .filter(
      (product, index) =>
        !query.page ||
        (index >= query.page * PRODUCTS_PER_PAGE - PRODUCTS_PER_PAGE &&
          index < query.page * PRODUCTS_PER_PAGE)
    );
