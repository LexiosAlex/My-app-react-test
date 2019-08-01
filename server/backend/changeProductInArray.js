const changeProductInArray = (reqBody, productsData) => {
  return productsData.map(item =>
    item.id === reqBody.id
      ? {
          categoryId: reqBody.categoryId,
          id: reqBody.id,
          key: reqBody.key,
          name: reqBody.name,
          price: reqBody.price,
          wholePrice: reqBody.wholePrice
        }
      : item
  );
};

export default changeProductInArray;
