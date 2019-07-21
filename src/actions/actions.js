export const addCategory = (categories, name) => ({
  type: "ADD_CATEGORY",
  categoryId: categories.length,
  categoryName: name
});

export const changeItems = (items, selectedCategory) => {
  let filteredItems = items.filter(
    it => it.categoryId === selectedCategory.categoryId
  );
  return {
    type: "CHANGE_ITEMS",
    payload: filteredItems
  };
};

export const changeCategory = selectedCategory => ({
  type: "CHANGE_CATEGORY",
  payload: selectedCategory
});
