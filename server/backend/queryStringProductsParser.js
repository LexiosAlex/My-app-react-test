export default (query, products) =>
  products
    .filter(
      product => !query.categoryId || +query.categoryId === product.categoryId
    )
    .filter(
      (product, index) =>
        !query.page ||
        (index >= query.page * 10 - 10 && index < query.page * 10)
    );
