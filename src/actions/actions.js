const getMaxId = itemsWithId => {
  const numArr = [];
  itemsWithId.forEach(it => {
    numArr.push(it.categoryId);
  });
  return Math.max.apply(null, numArr);
};

export const addCategory = (categories, name) => {
  return {
    type: "ADD_CATEGORY",
    categoryId: getMaxId(categories) + 1,
    categoryName: name
  };
};

export const deleteProduct = id => ({
  type: "DELETE_PRODUCT",
  id: id
});

export const addProduct = (categoryId, name, wholePrice, price, products) => {
  return {
    type: "ADD_PRODUCT",
    id: getMaxId(products) + 1,
    key: getMaxId(products) + 1,
    categoryId: categoryId,
    name: name,
    wholePrice: wholePrice,
    price: price
  };
};

export const deleteCategory = id => ({
  type: "DELETE_CATEGORY",
  categoryId: id
});

export const changeProduct = (id, categoryId, name, wholePrice, price) => {
  return {
    type: "CHANGE_PRODUCT",
    id: id,
    key: id,
    categoryId: categoryId,
    name: name,
    wholePrice: wholePrice,
    price: price
  };
};
