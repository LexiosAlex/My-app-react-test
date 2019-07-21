const filterActiveCategoryItems = (categoryId, items) =>
  items.filter(it => it.categoryId === categoryId);

export default filterActiveCategoryItems;
