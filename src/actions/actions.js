export const addCategory = (categories, name) => {
  const getCategoriesIdMax = () => {
    const numArr = [];
    categories.forEach(it => {
      numArr.push(it.categoryId);
    });
    return Math.max.apply(null, numArr);
  };

  return {
    type: "ADD_CATEGORY",
    categoryId: getCategoriesIdMax() + 1,
    categoryName: name
  };
};

// export const changeItems = (items, selectedCategory) => {
//   let filteredItems = items.filter(
//     it => it.categoryId === selectedCategory.categoryId
//   );
//   return {
//     type: "CHANGE_ITEMS",
//     payload: filteredItems
//   };
// };

export const addItem = () => {};

export const changeCategory = selectedCategory => ({
  type: "CHANGE_CATEGORY",
  payload: selectedCategory
});

export const deleteCategory = id => ({
  type: "DELETE_CATEGORY",
  categoryId: id
});
